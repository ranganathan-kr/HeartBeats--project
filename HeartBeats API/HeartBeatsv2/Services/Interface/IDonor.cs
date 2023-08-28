using HeartBeatsv2.Models;
using System.Collections.Generic;

namespace HeartBeatsv2.Services.Interface
{
    public interface IDonor
    {
        Task<List<Donor>> GetAllDonor();

        public Task<Donor> DonorLogin(string username, string password);
        public Task AddDonor(Donor donor);
        public Task<Donor> RemoveDonor(int donorid);
        public Task<Donor> UpdateDonor(int donorid, Donor donor);

        public Task<List<Donor>> SearchDonor(string city, string state, string grp);

        Task<Donor> SearchDonorById(int donorid);
    }
}
