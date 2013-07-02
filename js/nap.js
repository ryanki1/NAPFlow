/*
    Anonymous self-executing Solar-powered Motor for NAP portal
    ****************
    * May / June 2013
    * Westhouse Consulting
    * Kieran Ryan
    * **************
*/
(function(window, $) {
    var self = this;
    /* private methods: start */
    gotoLandingPage = function (){
        $("#main,#mainFooter").removeClass("makeSeeThrough");
        $("#steps").addClass("makeSeeThrough");
    }
    gotoTGuidePage = function (){
        $("#steps").removeClass("makeSeeThrough");
        $("#main,#mainFooter").addClass("makeSeeThrough");
    }
    /* private methods: end */
    window.unfccc = window.unfccc || {};
    unfccc.nap = {
        /* public methods: start */
        /* called from NAP Central portal page load */
        Initialize: function (){
            /* Landing page setup */
            $('.carousel').carousel({
                interval: 4000
            });
            $('#mainFooter img').capty({
                animation: 'fixed',
                height: 30
            });
        }
        /* public methods: end */
    }
}(window, jQuery))
