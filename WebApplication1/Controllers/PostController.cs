using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Repository;
using WebApplication1.Models;
using System.Collections;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        private ApplicationDbContext context;
        private readonly IPostRepository postRepository;
        private readonly UserManager<ApplicationUser> _userManager;
        
       

        public PostController(ApplicationDbContext context, IPostRepository postRepository, UserManager<ApplicationUser> _userManager)
        {

            this.context = context;
            this.postRepository = postRepository;
            this._userManager = _userManager;
        }

        [HttpGet("[Action]/{id?}")]
        public IQueryable GetAllPost()
        {
            
           
                return postRepository.GetAll();
            
        }

        [HttpGet("[Action]/{id}")]
        public PostAC GetAllById(int id=0)
        {
            return postRepository.GetById(id);
        }

        [HttpGet("[Action]/{categoryId}")]
        public IQueryable GetAllPostByCategoryId(int categoryId = 0)
        {
            return postRepository.GetAllByCategoryId(categoryId);
        }

        [HttpGet("[Action]/{tagId}")]
        public IQueryable GetAllPostByTagId(int tagId = 0)
        {
            return postRepository.GetAllByTagId(tagId);
        }

        [HttpPost("[Action]")]
        public Post PostPosts([FromBody] Post post)
        {
            post.Users_Id = _userManager.GetUserId(User);
            return postRepository.Add(post);


        }

       [HttpPut("[Action]/{id}")]
        public IEnumerable PutPost(int id, [FromBody] Post post)
        {
            post.Id = id;

            if (postRepository.Update(id, post))
            {
                return postRepository.GetAll();
            }
            else
            {
                return null;
            }
        }

        [HttpDelete("[Action]/{Id}")]
        //[DisableCors]
        public bool DeletePost(int Id)
        {
            if (postRepository.Delete(Id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                context.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}