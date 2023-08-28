using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace HeartBeatsv2.Models;

public partial class Donor
{
    public int Donorid { get; set; }

    public string Name { get; set; } = null!;

    public string Number { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime Dob { get; set; }

    public string Blood { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public string City { get; set; } = null!;

    public string State { get; set; } = null!;

    public string Alcoholic { get; set; } = null!;

    public string Password { get; set; } = null!;

    [System.Text.Json.Serialization.JsonIgnore]
    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();

    [System.Text.Json.Serialization.JsonIgnore]
    public virtual ICollection<Request> Requests { get; set; } = new List<Request>();
}
