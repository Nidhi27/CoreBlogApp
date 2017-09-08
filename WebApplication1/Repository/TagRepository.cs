using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class TagRepository : ITagRepository
    {
        ApplicationDbContext db;

        public TagRepository(ApplicationDbContext db)
        {
            this.db = db;
        }


        public IQueryable GetAll()
        {
            // TO DO : Code to get the list of all the records in database

            var data = db.Tags.Include(i => i.PostTags).ThenInclude(i => i.Post).Select(m => new
            { Id = m.Id, Name = m.Name });
            return data;
        }

        public IQueryable Get(int id)
        {
            // TO DO : Code to find a record in database
            var data = db.Tags.Where(x => x.Id == id)
                .Select(x => new
                {
                    Id = x.Id,
                    Name = x.Name,
                });
            return data;
        }

        //public Employee Add(Employee item)
        //{
        //    if (item == null)
        //    {
        //        throw new ArgumentNullException("item");
        //    }

        //    // TO DO : Code to save record into database
        //    db.Employees.Add(item);
        //    db.SaveChanges();
        //    return item;
        //}

        public Tag Add(Tag tag)
        {
            if (tag == null)
            {
                throw new ArgumentNullException("tag");
            }

            // TO DO : Code to save record into database
            db.Tags.Add(tag);
            db.SaveChanges();
            return tag;
        }
        public bool Update(Tag tag)
        {
            if (tag == null)
            {
                throw new ArgumentNullException("tag");
            }

            // TO DO : Code to update record into database
            var tags = db.Tags.Single(a => a.Id == tag.Id);
            tags.Name = tag.Name;
            //tags.PostId = tag.PostId;
            db.SaveChanges();

            return true;
        }


        public bool Delete(int id)
        {
            // TO DO : Code to remove the records from database
            Tag tags = db.Tags.Include(i => i.PostTags).Single(i => i.Id == id);
            db.Tags.Remove(tags);
            db.SaveChanges();
            return true;
        }
    }
}
