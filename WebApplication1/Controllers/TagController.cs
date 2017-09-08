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
    public class TagController : Controller
    {
        private ApplicationDbContext context;
        private readonly ITagRepository tagRepository;


        public TagController(ApplicationDbContext context, ITagRepository tagRepository)
        {

            this.context = context;
            this.tagRepository = tagRepository;
        }

        [HttpGet("[Action]/{id?}")]
        public IEnumerable GetAllTag(int Id = 0)
        {
            if (Id > 0)
            {
                return tagRepository.Get(Id);
            }

            else
            {

                return tagRepository.GetAll();
            }

        }
        [HttpPost("[Action]")]
        public Tag PostTags([FromBody] Tag tag)
        {

            return tagRepository.Add(tag);


        }

        [HttpPut("[Action]/{id}")]
        public IEnumerable PutTag(int id, [FromBody] Tag tag)
        {
            tag.Id = id;

            if (tagRepository.Update(tag))
            {
                return tagRepository.GetAll();
            }
            else
            {
                return null;
            }
        }

        [HttpDelete("[Action]/{Id}")]
        //[DisableCors]
        public bool DeleteTag(int Id)
        {
            if (tagRepository.Delete(Id))
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