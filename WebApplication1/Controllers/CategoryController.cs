using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Repository;
using System.Collections;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private ApplicationDbContext context;
        private readonly ICategoryRepository categoryRepository;


        public CategoryController(ApplicationDbContext context, ICategoryRepository categoryRepository)
        {

            this.context = context;
            this.categoryRepository = categoryRepository;
        }

        [HttpGet("[Action]/{id?}")]
        public IEnumerable GetAllCategory(int Id = 0)
        {
            if (Id > 0)
            {
                return categoryRepository.Get(Id);
            }

            else
            {

                return categoryRepository.GetAll();
            }

        }
        [HttpPost("[Action]")]
        public Category PostCategories([FromBody] Category category)
        {

            return categoryRepository.Add(category);


        }

       [ HttpPut("[Action]/{Id}")]
        public IEnumerable PutCategory(int Id, [FromBody] Category category)
        {
            category.Id = Id;

            if (categoryRepository.Update(category))
            {
                return categoryRepository.GetAll();
            }
            else
            {
                return null;
            }
        }

        [HttpDelete("[Action]/{Id}")]
        //[DisableCors]
        public bool DeleteCategory(int Id)
        {
            if (categoryRepository.Delete(Id))
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