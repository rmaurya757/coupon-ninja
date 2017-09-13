'use strict';
var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var URL = require('url-parse');
const url=require('url'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/scrape',function(req,res,next){
   var url1=req.body.url;
   var prod=req.body.prod;
   var myUrl = url.parse(url1);
     var ans='';
   if(myUrl.hostname.search(/myntra/)!=-1){
      var url2="http://www.grabon.in/myntra-coupons/";
   	  request(url2,function(error, response, html){

   	  	 if(!error)
   	  	 {
   	  	 	console.log(1);
            var $ =cheerio.load(html);
   	  	 	ans=$("div.sm-code").text();
            console.log(ans);
   	  	 };
   	  	 	
   	  	 
   	  })
      
      /*var url3="http://www.couponrani.com/myntra-com/";
   	  request(url3,function(error,response,html){
          if(!error){
          	console.log(1);
          	var $ =cheerio.load(html);
          	ans.concat($("button.btn.btn",this).attr("data-coupon").val());
          	console.log(ans);
          }

   	  })*/
     /* var ans1='';
   	  var url4="http://www.27coupons.com/stores/myntra.com/";
   	  request(url4,function(error,response,html){
   	  	  if(!error){
          	console.log(1);
          	var $ =cheerio.load(html);
          	ans1=$("p.tooltip-holder").children().text();
          	console.log(ans1);
          }
   	  })*/
      

      /*var ans1='';
   	  var url4="http://www.couponzguru.com/shopping-coupon/myntra-com";
   	  request(url4,function(error,response,html){
   	  	  if(!error){
          	console.log(1);
          	var $ =cheerio.load(html);
          	ans1=$("div.btn-block.clicktoreveal-code.img-responsive").text();
          	console.log(ans1);
          }
   	  })*/


   }
    if(myUrl.hostname.search(/jabong/)!=-1){

 		var url2="http://www.grabon.in/jabong-coupons/";
   	  request(url2,function(error, response, html){

   	  	 if(!error)
   	  	 {
   	  	 	console.log(1);
            var $ =cheerio.load(html);
   	  	 	ans=$("div.sm-code").text();
            console.log(ans);
   	  	 };
   	  	 	
   	  	 
   	  })



    }
});

module.exports = router;
