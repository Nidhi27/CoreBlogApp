using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
   public interface IPostRepository
    {
        IEnumerable<Post> GetAll(string userId);
        IQueryable GetAllByCategoryId(int categoryId);
        IQueryable GetAll();
        IQueryable Get(int id);
        PostAC GetById(int id);
        IQueryable GetAllByTagId(int tagId);
        Post Add(Post post);
        bool Update(int Id, Post post);
        bool Delete(int id);
    }
}
