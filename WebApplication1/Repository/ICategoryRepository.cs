using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
   public interface ICategoryRepository
    {
        IQueryable GetAll();
        IQueryable Get(int id);
        Category Add(Category category);
        bool Update(Category category);
        bool Delete(int id);
    }
}
