using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using System.Collections;

namespace WebApplication1.Repository
{
    public class PostRepository : IPostRepository
    {
        ApplicationDbContext db;

        public PostRepository(ApplicationDbContext db)
        {
            this.db = db;
        }

        public IEnumerable<Post> GetAll(string userId)
        {
            // TO DO : Code to get the list of all the records in database

            return db.Posts.Where(p => p.Users_Id == userId);
        }

        public IQueryable GetAllByCategoryId(int categoryId)
        {
            var data = db.Posts.Where(p => p.Category_Id == categoryId).OrderByDescending(x => x.PostedOn)
                .Select(x => new
                {
                    Id = x.Id,
                    Title = x.Title,
                    Category_Id = x.Category_Id,
                   
                    UserName = db.Users.Where(y => y.Id == x.Users_Id)
                   .Select(y => y.UserName)
                   .FirstOrDefault(),
                    CategoryName = db.Categories.Where(c => c.Id == x.Category_Id)
                                   .Select(y => y.Name)
                                   .FirstOrDefault(),
                    
                    PostedOn = x.PostedOn,
                    Content = x.Content,
                });

            return data;
        }

        public IQueryable GetAllByTagId(int tagId)
        {
            //var data = db.Posts.Where(x => x.PostTags.Select(m => m.Tag.Id).Contains(tagId)).OrderByDescending(x => x.PostedOn)
            var data = db.Posts.Where(x => x.PostTags.Select(m => m.Tag.Id).Contains(tagId)).OrderByDescending(x => x.PostedOn)
                .Select(x => new
                {
                    Id = x.Id,
                    Title = x.Title,
                    Category_Id = x.Category_Id,

                    UserName = db.Users.Where(y => y.Id == x.Users_Id)
                   .Select(y => y.UserName)
                   .FirstOrDefault(),
                    CategoryName = db.Categories.Where(c => c.Id == x.Category_Id)
                                   .Select(y => y.Name)
                                   .FirstOrDefault(),
                 
                    PostedOn = x.PostedOn,
                    Content = x.Content,
                });

            return data;

        }

    

        public IQueryable GetAll()
        {
            // TO DO : Code to get the list of all the records in database

            var data = db.Posts.OrderByDescending(x => x.PostedOn)
                .Include(i => i.PostTags)
                 .ThenInclude(i => i.Tag)
            .Select(x => new
            {
                Id = x.Id,
                Title = x.Title,
                CategoryId = x.Category_Id,
                UserName = db.Users.Where(y => y.Id == x.Users_Id)
                .Select(y => y.UserName)
                .FirstOrDefault(),
                CategoryName = db.Categories.Where(c => c.Id == x.Category_Id)
                                .Select(y => y.Name)
                                .FirstOrDefault(),

               
                PostedOn = x.PostedOn,
                Content = x.Content,
            });
            return data;
        }

        public PostAC GetById(int Id)
        {
            //var postIDs = db.Posts.Select(post => post.Id);
            var data = db.Posts
                .Include(i => i.Category)
                .Include(i => i.PostTags)
                .ThenInclude(i => i.Tag).Where(x => x.Id == Id).OrderByDescending(x => x.PostedOn).FirstOrDefault();

            PostAC post = new PostAC();

            post.Category_Id = data.Category_Id;
            post.Content = data.Content;
            post.Id = data.Id;
            post.PostedOn = data.PostedOn;
            post.Title = data.Title;
            post.Users_Id = data.Users_Id;
            post.UserName = db.Users.FirstOrDefault(y => y.Id == data.Users_Id).UserName;
            post.TagIds = data.PostTags.Select(x => x.tagId).ToList();
            return post;


              


        }

        public IQueryable Get(int id)
        {
            //return db.Posts.Include(post => post.Category).Include(post => post.PostTags).ThenInclude(post => post.Tag)
            //    .Select(x => new
            //    {

            //    }

            //    ).ToList(

            var data = db.Posts.Where(x => x.Id == id)
                .Include(i => i.PostTags)
                 .ThenInclude(i => i.Tag)           
            .Select(x => new
            {
                Id = x.Id,
                Title = x.Title,
                CategoryId = x.Category_Id,
                UserName = db.Users.Where(y => y.Id == x.Users_Id)
                .Select(y => y.UserName)
                .FirstOrDefault(),
                CategoryName = db.Categories.Where(c => c.Id == x.Category_Id)
                                .Select(y => y.Name)
                                .FirstOrDefault(),
                TagName = db.Tags.Where(c => c.Id == x.Id)
                .Select(m => new { Id = m.Id, Name = m.Name }).ToList(),
                //Tags = db.Tags.Select(m => new { Id = m.Id, Name = m.Name }).ToList(),
                //TagName = x.PostTags.Select(m => new { Id = m.Tag.Id, Name = m.Tag.Name }).ToList(),
                //Tags = x.PostTags.Select(m => new { Id = m.Tag.Id, Name = m.Tag.Name }).ToList(),
                PostedOn = x.PostedOn,
                Content = x.Content,
                //Tags = x.PostTags.Select(y => y.Tag).ToList(),
            });
            return data;
        }

        public Post Add(Post post)
        {
            if (post == null)
            {
                throw new ArgumentNullException("post");
            }

            // TO DO : Code to save record into database
            Post p = new Post();
          
            p.Title = post.Title;
            p.Content = post.Content;
            p.PostedOn = post.PostedOn;
            p.Users_Id = post.Users_Id;
            p.Category_Id = post.Category_Id;
            p.TagIds = post.TagIds;

            db.Posts.Add(p);
            db.SaveChanges();
            if (p.TagIds != null)
            {
                p.PostTags = new List<PostTag>();
                foreach (var tag in p.TagIds)
                {
                    var tagToAdd = new PostTag { postId = p.Id, tagId = tag };
                    p.PostTags.Add(tagToAdd);
                }

                db.SaveChanges();
            }

          

            return post;

        }


        public bool Update(int Id, Post post)
        {
            if (post == null)
            {
                throw new ArgumentNullException("post");
            }

            Post postToUpdate = db.Posts.Include(i => i.PostTags).ThenInclude(i => i.Tag).SingleOrDefault(i => i.Id == post.Id);
            //db = new ApplicationDbContext();
            Post posts = db.Posts.Include(i => i.PostTags).ThenInclude(i => i.Tag).SingleOrDefault(i => i.Id == post.Id);
            posts.Title = post.Title;
            posts.Content = post.Content;
            posts.PostedOn = post.PostedOn;
            posts.Category_Id = post.Category_Id;
            posts.TagIds = post.TagIds;
            //if (posts.TagIds != null)
            //{
                
            //    posts.PostTags = new List<PostTag>();
             
            //    foreach (var tag in posts.TagIds)
            //    {

            //        var tagToAdd = new PostTag { postId = posts.Id, tagId = tag };
            //        posts.PostTags.Add(tagToAdd);
            //    }

            // }
          if(posts.TagIds != null)
            {
                var selectedTagsHs = new HashSet<int>(posts.TagIds);
                var postTags = new HashSet<int>(postToUpdate.PostTags.Select(c => c.Tag.Id));
                foreach(var tag in db.Tags)
                {
                    if(selectedTagsHs.Contains(tag.Id))
                    {
                        if(!postTags.Contains(tag.Id))
                        {
                            postToUpdate.PostTags.Add(new PostTag { Id = postToUpdate.Id, tagId = tag.Id });
                        }
                    }

                    else
                    {
                        if (postTags.Contains(tag.Id))
                        {
                            PostTag tagToRemove = postToUpdate.PostTags.SingleOrDefault(i => i.tagId == tag.Id);
                            db.Remove(tagToRemove);
                        }
                    }
                }
            }
            db.SaveChanges();
            return true;

        }


        public bool Delete(int id)
        {
            // TO DO : Code to remove the records from database
            Post posts = db.Posts.Include(i => i.PostTags).Single(i => i.Id == id);
            db.Posts.Remove(posts);
            db.SaveChanges();
            return true;
        }
    }
}
