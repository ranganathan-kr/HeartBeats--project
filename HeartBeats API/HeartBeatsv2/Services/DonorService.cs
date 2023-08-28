namespace HeartBeatsv2.Services;
using HeartBeatsv2.Models;
using HeartBeatsv2.Services.Interface;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Runtime.ConstrainedExecution;
using System.Threading.Tasks;

public class DonorService : IDonor
{
    public HeartBeatsv2Context _heartBeatsContext;

    public DonorService(HeartBeatsv2Context heartBeatsContext)
    {
        _heartBeatsContext = heartBeatsContext;
    }

    public async Task AddDonor(Donor donor)
    {

        _heartBeatsContext.Donors.Add(donor);
        await _heartBeatsContext.SaveChangesAsync();
        /*var donores = await _heartBeatsContext.Donors.ToListAsync();
        return donores;*/
    }

    public async Task<Donor> DonorLogin(string username, string password)
    {
        var donor= await _heartBeatsContext.Donors.Where(x => x.Email == username && x.Password == password).FirstAsync();
        if(donor == null)
        {
            throw new Exception("Not found");
        }
        else
        {
            return donor;
        }
        
    }

    public async Task<List<Donor>> GetAllDonor()

    {
        var lists = await _heartBeatsContext.Donors.ToListAsync();
        return lists;
    }



    public async Task<Donor> RemoveDonor(int donorid)
    {
        Donor donor = await _heartBeatsContext.Donors.FindAsync(donorid);
        if (donor == null)
        {
            throw new Exception("nooo");
        }
        else
        {
            _heartBeatsContext.Remove(donor);
            await _heartBeatsContext.SaveChangesAsync();

            return donor;
        }


    }

    public async Task<List<Donor>> SearchDonor(string city, string state, string grp)
    {
        var rsearch = await _heartBeatsContext.Donors.Where(donor => donor.City == city &&
        donor.State == state && donor.Blood == grp).ToListAsync();

        if (rsearch == null)
        {
            throw new Exception("Not found");
        }
        else
        {
            return rsearch;
        }
    }


    public async Task<Donor> SearchDonorById(int jd)
    {
        var rsearch = await _heartBeatsContext.Donors.FindAsync(jd);
        if (rsearch == null)
        {
            throw new Exception("Not found");
        }
        else
        {
            return rsearch;
        }
    }

    public async Task<Donor> UpdateDonor(int donorid, Donor donor)
    {
        Donor? rsdonor = await _heartBeatsContext.Donors.FindAsync(donorid);
        if (rsdonor == null)
        {
            throw new Exception("not found");
        }
        else
        {
            rsdonor.Name = donor.Name;
            rsdonor.State = donor.State;
            rsdonor.City = donor.City;
            rsdonor.Number = donor.Number;
            rsdonor.Email = donor.Email;
            await _heartBeatsContext.SaveChangesAsync();
            return rsdonor;
        }
    }
}

