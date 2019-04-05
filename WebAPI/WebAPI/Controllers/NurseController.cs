using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class NurseController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Nurse
        public IQueryable<Nurse> GetNurses()
        {
            return db.Nurses;
        }

        // PUT: api/Nurse/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNurse(int id, Nurse nurse)
        {

            if (id != nurse.NurseID)
            {
                return BadRequest();
            }

            db.Entry(nurse).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NurseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Nurse
        [ResponseType(typeof(Nurse))]
        public IHttpActionResult PostNurse(Nurse nurse)
        {
            db.Nurses.Add(nurse);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = nurse.NurseID }, nurse);
        }

        // DELETE: api/Nurse/5
        [ResponseType(typeof(Nurse))]
        public IHttpActionResult DeleteNurse(int id)
        {
            Nurse nurse = db.Nurses.Find(id);
            if (nurse == null)
            {
                return NotFound();
            }

            db.Nurses.Remove(nurse);
            db.SaveChanges();

            return Ok(nurse);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NurseExists(int id)
        {
            return db.Nurses.Count(e => e.NurseID == id) > 0;
        }
    }
}