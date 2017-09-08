using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class CategoryRepository :  ICategoryRepository
    {
        ApplicationDbContext db;

        public CategoryRepository(ApplicationDbContext db)
        {
            this.db = db;
        }
        public IQueryable GetAll()
        {
            // TO DO : Code to get the list of all the records in database
            var data = db.Categories
               .Select(x => new
               {
                   Id = x.Id,
                   Name = x.Name,
               });
            return data;
        }

        public IQueryable Get(int id)
        {
            // TO DO : Code to find a record in database
            var data = db.Categories.Where(x => x.Id == id)
                .Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                });
            return data;
        }

      

        public Category Add(Category category)
        {
            if (category == null)
            {
                throw new ArgumentNullException("category");
            }

            // TO DO : Code to save record into database
            db.Categories.Add(category);
            db.SaveChanges();
            return category;
        }
        public bool Update(Category category)
        {
            if (category == null)
            {
                throw new ArgumentNullException("category");
            }

            // TO DO : Code to update record into database
            Category categories = db.Categories.Single(a => a.Id == category.Id);
            categories.Name = category.Name;


            db.SaveChanges();

            return true;
        }


        public bool Delete(int id)
        {
            // TO DO : Code to remove the records from database
            Category categories = db.Categories.Include(c => c.Posts).ThenInclude(c => c.PostTags).Single(i => i.Id == id);
            db.Categories.Remove(categories);
            db.SaveChanges();
            return true;
        }
    }
}
