var RoyalMailZones = {"UK":"UK","USA":"World Zone 3", "France":"Europe Zone 1", "Germany":"Europe Zone 1", "Australia":"World Zone 2"};
var ParcelForceZones = {"UK":"UK","USA":"Zone 10", "France":"Zone 7", "Germany":"Zone 7", "Australia":"Zone 11"};

function getCompany(isInsuranceUnder250)
{
    if(isInsuranceUnder250)
        return "RoyalMail";

    return "ParcelForce";
}

function getCountryZone(isInsuranceUnder250, country)
{
    if(isInsuranceUnder250)
        return RoyalMailZones[country];

    return ParcelForceZones[country];
}

function getPostageInfo()
{
    document.getElementsByName("DeliveryCompany").textContent(document.getElementsByName("Insurance").value);
}