var RoyalMailZones = {"UK":"UK","USA":"World Zone 3", "France":"Europe Zone 1", "Germany":"Europe Zone 1", "Australia":"World Zone 2"};
var ParcelForceZones = {"UK":"UK","USA":"Zone 10", "France":"Zone 7", "Germany":"Zone 7", "Australia":"Zone 11"};

function getPostageInfo()
{
    var DeliveryCompany = document.getElementById("Insurance").value;
    document.getElementById("DeliveryCompanyResult").innerHTML = DeliveryCompany;
    
    var Country = document.getElementById("Country").value;
    var CountryZone;
    if(DeliveryCompany == "Royal Mail")
    {
        CountryZone = RoyalMailZones[Country];
    }
    else
    {
        CountryZone = ParcelForceZones[Country];
    }

    document.getElementById("CountryZoneResult").innerHTML = CountryZone;
}