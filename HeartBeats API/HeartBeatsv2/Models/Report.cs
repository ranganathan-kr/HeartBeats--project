using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace HeartBeatsv2.Models;

public partial class Report
{
    public int Reportid { get; set; }

    public int Donorid { get; set; }

    public string Report1 { get; set; } = null!;

    public DateTime Tym { get; set; }

    public string RecipName { get; set; } = null!;

    public int RecipPhnNum { get; set; }

    [System.Text.Json.Serialization.JsonIgnore]
    public virtual Donor Donor { get; set; } = null!;
}
