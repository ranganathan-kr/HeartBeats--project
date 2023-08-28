using HeartBeatsv2.Models;
using HeartBeatsv2.Services.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HeartBeatsv2.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonorController : ControllerBase
    {
        private IDonor _donor;

        public DonorController(IDonor donor)
        {
            _donor = donor;
        }


        [HttpGet("{donorid}")]
        public async Task<ActionResult<Donor>> SearchDonorById(int donorid)
        {
            try
            {
                Donor rdonor = await _donor.SearchDonorById(donorid);
                return Ok(rdonor);

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> AddDonor(Donor donor)
        {
            try
            {
                await _donor.AddDonor(donor);
                return Ok();

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{city},{state},{grp}")]
        public async Task<ActionResult<List<Donor>>> SearchDonor(string city, string state, string grp)
        {
            try
            {
                var rsearch = await _donor.SearchDonor(city, state, grp);
                return Ok(rsearch);
            }
            catch (Exception ex)
            {

                return NotFound(ex.Message);
            }
        }

        [HttpGet]

        public async Task<ActionResult<List<Donor>>> GetAllDonor()
        {
            var donor = await _donor.GetAllDonor();
            if (donor == null)
            {
                return NotFound("npooo");
            }
            return Ok(donor);

        }

        [HttpDelete]
        public async Task<ActionResult<Donor>> RemoveDonor(int donorid)
        {
            try
            {
                var donor = await _donor.RemoveDonor(donorid);
                return Ok(donor);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpPut]

        public async Task<ActionResult<Donor>> UpdateDonor(int donorid, Donor donor)
        {
            try
            {
                var rdonor = await _donor.UpdateDonor(donorid, donor);
                return rdonor;
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{username},{password}")]
        public async Task<ActionResult<Donor>> DonorLogin(string username, string password)
        {
            try
            {
                var cre =await _donor.DonorLogin(username, password);
                return (cre);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
