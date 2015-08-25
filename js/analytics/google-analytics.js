// Copyright 2002-2013, University of Colorado Boulder

/**
 * Google analytics collection for HTML5 sims.
 * Code provided by Google and Hewlett, possibly doctored by PhET.
 * Include this script as the last thing in your DOM's head, like this:
 * <script src='common/phetcommon/js/analytics/google-analytics.js'></script>
 *
 * NOTE: Please be careful about modifications, as it relies on external scripts.
 *
 * @author Sam Reid
 */

( function() {
  'use strict';

  var ua = navigator.userAgent;
  var hasIESecurityRestrictions = !!( ua.match( /MSIE/ ) || ua.match( /Trident\// ) || ua.match( /Edge\// ) );

  // If we're in some form of IE running offline, don't attempt to make a cross-origin request.
  // See https://github.com/phetsims/joist/issues/164
  if ( window.location.protocol === 'file:' && hasIESecurityRestrictions ) {
    return;
  }

  var _gaq = _gaq || [];
  _gaq.push( [ '_setAccount', 'UA-5033201-1' ] );
  _gaq.push( [ '_setDomainName', document.domain ] ); // track any domain (except localhost or file://)
  _gaq.push( [ '_setAllowLinker', true ] ); // allow cross-domain tracking
  _gaq.push( [ '_setCustomVar', 1, 'Sim Version', ( phet.chipper && phet.chipper.version ), 3 ] ); // slot 1, 3->page-level scope
  _gaq.push( [ '_setCustomVar', 2, 'Sim Locale', ( phet.chipper && phet.chipper.locale ), 3 ] ); // slot 2, 3->page-level scope
  _gaq.push( [ '_trackPageview' ] );
  _gaq.push( [ '_trackPageLoadTime' ] );

  (function() {
    var ga = document.createElement( 'script' );
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName( 'script' )[ 0 ];
    s.parentNode.insertBefore( ga, s );
  })();

  // Tracking code for Hewlett, see https://github.com/phetsims/joist/issues/109
  /* Originally below, modified for linter:
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
   })(window,document,'script','//www.google-analytics.com/analytics.js','hewlettOERTracker');
   hewlettOERTracker('create', 'UA-5033010-1', 'phet.colorado.edu');
   hewlettOERTracker('send', 'pageview');
   */
  (function( i, s, o, g, r, a, m ) {
    i.GoogleAnalyticsObject = r;
    i[ r ] = i[ r ] || function() {
      (i[ r ].q = i[ r ].q || []).push( arguments );
    }, i[ r ].l = 1 * new Date();
    a = s.createElement( o ), m = s.getElementsByTagName( o )[ 0 ];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore( a, m );
  })( window, document, 'script', ( 'https:' === document.location.protocol ? 'https:' : 'http:' ) + '//www.google-analytics.com/analytics.js', 'hewlettOERTracker' );
  window.hewlettOERTracker( 'create', 'UA-5033010-1', 'phet.colorado.edu' );
  window.hewlettOERTracker( 'send', 'pageview' );
} )();
