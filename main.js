(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(window).bind("load", function () {
  //when the content is loaded
  console.log('loaded');
  $('.load').addClass('load-done');

  //with setTimeOut
  setTimeout(function () {
    console.log('loaded after setTimeOut');
    $('.jq').addClass('preload');
  }, 500);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLE1BQWYsRUFBdUIsWUFBVztBQUNoQztBQUNBLFVBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxJQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLFdBQXBCOztBQUVBO0FBQ0EsYUFBVyxZQUFVO0FBQ25CLFlBQVEsR0FBUixDQUFZLHlCQUFaO0FBQ0EsTUFBRSxLQUFGLEVBQVMsUUFBVCxDQUFrQixTQUFsQjtBQUNELEdBSEQsRUFHRyxJQUhIO0FBSUQsQ0FWRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKHdpbmRvdykuYmluZChcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gIC8vd2hlbiB0aGUgY29udGVudCBpcyBsb2FkZWRcbiAgY29uc29sZS5sb2coJ2xvYWRlZCcpO1xuICAkKCcubG9hZCcpLmFkZENsYXNzKCdsb2FkLWRvbmUnKTtcblxuICAvL3dpdGggc2V0VGltZU91dFxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ2xvYWRlZCBhZnRlciBzZXRUaW1lT3V0JylcbiAgICAkKCcuanEnKS5hZGRDbGFzcygncHJlbG9hZCcpO1xuICB9LCAyMDAwKTtcbn0pO1xuIl19
