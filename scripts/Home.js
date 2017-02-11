window.GreatScott = window.GreatScott || {};
window.GreatScott.Home = window.GreatScott.Home || {};

GreatScott.Home.Index = function GreatScott$Home$Index()
{
    //GreatScott.firebase.auth().signInWithEmailAndPassword(email, password);

    //setting a temporary highlight REMOVE when firebase integration complete
    this._highlights = [{   image: "https://theindisputabledirt.files.wordpress.com/2016/04/victorias_secret_store_4_722_lexington_ave_new_york_ny_10022_usa_-_dec_2012.jpg?w=620",
                             title: "Victoria's Secret Reminds Us Why We Should Stop Taking Victoria's Secret Seriously",
                             intro: "And a lot of things wrong with modern society...."
                         },   
                        {
                            image:"https://theindisputabledirt.files.wordpress.com/2016/04/paris_tuileries_garden_facepalm_statue.jpg?w=620",
                            title:"This #MyCalvins Ad Is Everything That's Wrong With Modern Advertising",
                            intro:"And a lot of things wrong with modern society...."

                        },
                        {
                            image:"https://theindisputabledirt.files.wordpress.com/2015/12/untitled-1.jpg",
                            title:"Shamelessness and Confidence want to admit it are Two Different Things",
                            intro:"And for some reason people don't ..."
                        }];

    this._highlightsTemplate = $("#gs-highlight").template();
    this._InitSuccess();
}

GreatScott.Home.Index.prototype = 
{
    _spinner: null,
    _userAuthenticated: false,
    _highlightsTemplate: null,
    _highlights: [],

    _InitSuccess: function GreatScott$Home$InitSuccess(result)
    {
        //TODO: integrate with Firebase

        //Show information from database
        $.tmpl(this._highlightsTemplate, { Highlight: this._highlights }).appendTo("#gs-top-three");
    }


}

