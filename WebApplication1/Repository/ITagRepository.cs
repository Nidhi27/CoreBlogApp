using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
   public interface ITagRepository
    {
        IQueryable GetAll();
        IQueryable Get(int id);

        Tag Add(Tag tag);
        bool Update(Tag tag);
        bool Delete(int id);
    }
}
