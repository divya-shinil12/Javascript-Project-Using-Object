document.addEventListener("DOMContentLoaded", function() {
    // Create an empty object and add properties
    const company = {
        name: "ABC Technology",
        category: "IT",
        total_employees: 100,
        website: "www.abctech.com",
        startDate: 1960,
        ceo: "Mariya Peterson"
    };

    // Display the result in console
    document.getElementById("ceo-name").innerHTML = "The CEO of the company is " +company.ceo;

    // Display the current number of employees
    document.getElementById("numOfEmp").innerHTML = "The total number of employees in 2023: " +company.total_employees;

    // Update the total number of employees
    company.total_employees = 120;

    // Display the updated number of employees
    document.getElementById("modNumOfEmp").innerHTML = "The total number of employees in 2024: " +company.total_employees;

    // Create a string with all the properties and values
    let companyDetails = `
        CEO: ${company.ceo} <br>
        Name: ${company.name} <br>
        Category: ${company.category} <br>
        Total Employees: ${company.total_employees} <br>
        Website: ${company.website} <br>
        Start Date: ${company.startDate}
    `;

    // Update the HTML element with the company details
    document.getElementById("company_details").innerHTML = companyDetails;

    //Display all the properties and values of the company by traversing through the properties.
    const objVal = document.getElementById('traverse_object');
    //traverse through the properties using loop
    for(let i in company){
        if(company.hasOwnProperty(i)){
            const details = `${i} : ${company[i]}`;
            const p = document.createElement('p');
            p.textContent = details;
            objVal.appendChild(p);
        }
    }

    //Creating an array of companies
    const companies = [
        { id: 1, name: 'ABC Technology', category: 'IT', total_employees: 400, website: 'www.abctech.com', 
            address: {street: 'street 123', city: 'Gothenburg', county: 'GB', zip: '46537'} },
        { id: 2, name: 'XYZ Innovations', category: 'Healthcare', total_employees: 50, website: 'www.xyzinnovations.com',
            address: {street: 'street 31', city: 'Stockholm', county: 'SH', zip: '40876'} },
        { id: 3, name: 'Global Enterprises', category: 'Finance', total_employees: 200, website: 'www.globalenterprises.com', 
            address: {street: 'street 75', city: 'Uppsala', county: 'UP', zip: '40256'} },
        { id: 4, name: 'Fashion Outlet', category: 'Marketing', total_employees: 800, website: 'www.fashionoutlet.com',
            address: {street: 'street 3', city: 'Kungsbacka', county: 'HA', zip: '44876'} },
        { id: 5, name: 'Matrix Company', category: 'IT', total_employees: 300, website: 'www.fashionoutlet.com', 
            address: {street: 'street 31', city: 'Stockholm', county: 'SH', zip: '40222'} }
    ];

    //Get the id of the div to be displayed
    const companyList = document.getElementById('companies_array');

    //Using foreach to iterate through the properties and display them
    companies.forEach(key => {
        const div = document.createElement('div');
        div.textContent = `Company Name : ${key.name}, Category : ${key.category}, Website : ${key.website}`;
        companyList.appendChild(div);
    });

    //Adding nested address and then display
    const addNested = document.getElementById('nested_address');
    //Using foreach to iterate
    companies.forEach(company_details => {
        const div = document.createElement('div');
        div.textContent = `Company Name: ${company_details.name}, 
                           Category: ${company_details.category}, 
                           Total Employees: ${company_details.total_employees}, 
                           Website: ${company_details.website}, 
                           Address: ${company_details.address.street}, ${company_details.address.city}, ${company_details.address.county}, ${company_details.address.zip}`;
        addNested.appendChild(div);
    });

    //Delete the website url from the companies using hasOwnProperty() method.
    const delWebsiteUrl = document.getElementById('delete_website');

    //Delete the companies website url using delete keyword
    companies.forEach(company_details => {
        delete company_details.website;    
    });

    //check if the website is removed or not
    companies.forEach(company_details => {
        //create a new div element for each company
        const div = document.createElement('div');
        const checkWebsiteUrl = company_details.hasOwnProperty('website');
        const websiteUrl = checkWebsiteUrl?`website: ${company_details.website}` : 'not found';
        div.textContent = `Company Name: ${company_details.name}, 
                           Category: ${company_details.category}, 
                           Total Employees: ${company_details.total_employees}, 
                           Website: ${websiteUrl}, 
                           Address: ${company_details.address.street}, ${company_details.address.city}, ${company_details.address.county}, ${company_details.address.zip}`;
        delWebsiteUrl.appendChild(div);
    });

    //Display properties of an object
    company.details = function(){
        return (this.ceo +", "+ this.category +", "+ this.total_employees +" and, "+ this.website +".");
    };
    document.getElementById('property_values').innerHTML="The company details are "+company.details();

    //Create two company objects and compare them to see whether they are equal.
    const person1 = {
        name : "John",
        age : 32,
        country : 'Australia'
    };

    const person2 = {
        name : "John",
        age : 32,
        country : 'America'
    };

    const compareObjects = document.getElementById('companies_compare');
    let compare = (person1 === person2);
    if(compare == true)
    { 
        compareObjects.textContent = `The two objects are the same`;
    }
    else
    {
        compareObjects.textContent = `The two objects are not the same`;
    }

    //Write a constructor function to initialize the company object
    function person(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    const newVal = new person("Clara", 22, "France");
    document.getElementById("new_values").innerHTML = "The person name is " + newVal.name + ", age is " + newVal.age + ", and country is "+newVal.country+"."; 
});