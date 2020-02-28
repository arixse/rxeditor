
let themes = {
  base:{
    cssFiles:[
      'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
      'style/rxeditor.css',
      'style/font-awesome-4.7.0/css/font-awesome.min.css',
    ],
    jsFiles:[
    ],
  },
  agency : {
    id:'agency',
    cssFiles:[
      'themes/agency/vendor/bootstrap/css/bootstrap.min.css',
      'themes/agency/vendor/fontawesome-free/css/all.min.css',
      'style/font-awesome-4.7.0/css/font-awesome.min.css',
      'https://fonts.googleapis.com/css?family=Montserrat:400,700',
      'https://fonts.googleapis.com/css?family=Kaushan+Script',
      'https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic',
      'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700',
      'themes/agency/css/agency.min.css',
    ],
    jsFiles:[
      'themes/agency/vendor/jquery/jquery.min.js',
      'themes/agency/vendor/bootstrap/js/bootstrap.bundle.min.js',
      'themes/agency/vendor/jquery-easing/jquery.easing.min.js',
      'themes/agency/js/jqBootstrapValidation.js',
      'themes/agency/js/contact_me.js',
      //'themes/agency/js/agency.min.js',
    ],

    uiBlocks:[
      {
        toolboxInfo:{
          //groupId : 'groupThemUI',
          elementId : 'navbar',
          elementName : "Navbar",
        },
        
        json:`
        {"name":"BSNavbar","meta":{"tag":"nav","classList":["fixed-top","navbar","navbar-expand-lg","navbar-dark"],"styles":{},"attributes":{"id":"mainNav"}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"BSNavbarBrand","meta":{"tag":"a","classList":["js-scroll-trigger","navbar-brand"],"styles":{},"attributes":{"href":"#page-top"},"innerHTML":"Start RXEditor","generalTextfield":"contentEditable"},"children":[]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["collapse","navbar-collapse"],"styles":{},"attributes":{"id":"navbarResponsive"}},"children":[{"name":"HTMLUl","meta":{"tag":"ul","classList":["navbar-nav","text-uppercase","ml-auto"],"styles":{},"attributes":{}},"children":[{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#services"},"innerHTML":"Services","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#portfolio"},"innerHTML":"Services","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#about"},"innerHTML":"About","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#team"},"innerHTML":"Team","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#contact"},"innerHTML":"Contact","generalTextfield":"contentEditable"},"children":[]}]}]}]},{"name":"BSNavbarToggler","meta":{"tag":"button","classList":["navbar-toggler","navbar-toggler-right"],"styles":{},"attributes":{"data-toggle":"collapse","data-target":"#navbarResponsive"}},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":[],"styles":{},"attributes":{},"innerHTML":"Menu","generalTextfield":"contentEditable"},"children":[]},{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-bars"],"styles":{},"attributes":{}},"children":[]}]}]}]}
        `,
      },
      {
        toolboxInfo:{
          elementId : 'header',
          elementName : "Header",
          mouseFollowerWidth: '600px'
        },
        
        json:`
          {"name":"HTMLHeader","meta":{"tag":"header","classList":["masthead"],"styles":{},"attributes":{}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-text"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-lead-in"],"styles":{},"attributes":{},"generalTextfield":"contentEditable","innerHTML":"Welcome To Our Studio!"},"children":[]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-heading","text-uppercase"],"styles":{},"attributes":{},"generalTextfield":"contentEditable","innerHTML":"It's Nice To Meet You"},"children":[]},{"name":"BSButton","meta":{"tag":"a","classList":["btn","btn-primary","btn-xl","js-scroll-trigger","text-uppercase"],"styles":{},"attributes":{"href":"#"},"innerHTML":"Tell Me More","generalTextfield":"contentEditable"},"children":[]}]}]}]}
        `,
      },
      {
        toolboxInfo:{
          elementId : 'services',
          elementName : "Services",
          mouseFollowerWidth: '600px',
        },
        
        json:`
          {"name":"HTMLSection","meta":{"tag":"section","classList":["page-section"],"styles":{},"attributes":{"id":"services"}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"BSRow","meta":{"tag":"div","classList":["row"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-lg-12","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h2","classList":["section-heading","text-uppercase"],"styles":{},"attributes":{},"innerHTML":"Services","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h3","classList":["section-subheading","text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet consectetur.","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSRow","meta":{"tag":"div","classList":["row","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4"],"styles":{},"attributes":{}},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":["fa-stack","fa-4x"],"styles":{},"attributes":{},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-circle","fas","text-primary","fa-stack-2x"],"styles":{},"attributes":{}},"children":[]},{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-shopping-cart","fa-stack-1x","fa-inverse"],"styles":{},"attributes":{}},"children":[]}]},{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"E-Commerce","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.","generalTextfield":"contentEditable"},"children":[]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4"],"styles":{},"attributes":{}},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":["fa-stack","fa-4x"],"styles":{},"attributes":{},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-circle","fas","text-primary","fa-stack-2x"],"styles":{},"attributes":{}},"children":[]},{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-inverse","fa-stack-1x","fas","fa-laptop"],"styles":{},"attributes":{}},"children":[]}]},{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"E-Responsive Design","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.","generalTextfield":"contentEditable"},"children":[]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4"],"styles":{},"attributes":{}},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":["fa-stack","fa-4x"],"styles":{},"attributes":{},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-circle","fas","text-primary","fa-stack-2x"],"styles":{},"attributes":{}},"children":[]},{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-inverse","fa-stack-1x","fas","fa-lock"],"styles":{},"attributes":{}},"children":[]}]},{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"E-Web Security","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.","generalTextfield":"contentEditable"},"children":[]}]}]}]}]}
        `,
      },
      {
        toolboxInfo:{
          elementId : 'portfolio',
          elementName : "Portfolio Grid",
          mouseFollowerWidth: '600px',
        },
        
        json:`
          {"name":"HTMLSection","meta":{"tag":"section","classList":["page-section","bg-light"],"styles":{},"attributes":{"id":"portfolio"}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"BSRow","meta":{"tag":"div","classList":["row"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-lg-12","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h2","classList":["section-heading","text-uppercase"],"styles":{},"attributes":{},"innerHTML":"Services","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h3","classList":["section-subheading","text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet consectetur.","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSRow","meta":{"tag":"div","classList":["row","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4","col-sm-6","portfolio-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["portfolio-link"],"styles":{},"attributes":{"data-toggle":"modal","href":"#portfolioModal1"},"innerHTML":"","generalTextfield":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover-content"],"styles":{},"attributes":{}},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-plus","fa-3x"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLImg","meta":{"tag":"img","classList":["img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/portfolio/01-thumbnail.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-caption"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Threads","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":[],"styles":{},"attributes":{},"innerHTML":"Illustration","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4","col-sm-6","portfolio-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["portfolio-link"],"styles":{},"attributes":{"data-toggle":"modal","href":"#portfolioModal1"},"innerHTML":"","generalTextfield":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover-content"],"styles":{},"attributes":{}},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-plus","fa-3x"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLImg","meta":{"tag":"img","classList":["img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/portfolio/02-thumbnail.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-caption"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Explore","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":[],"styles":{},"attributes":{},"innerHTML":"Graphic Design","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4","col-sm-6","portfolio-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["portfolio-link"],"styles":{},"attributes":{"data-toggle":"modal","href":"#portfolioModal1"},"innerHTML":"","generalTextfield":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover-content"],"styles":{},"attributes":{}},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-plus","fa-3x"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLImg","meta":{"tag":"img","classList":["img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/portfolio/03-thumbnail.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-caption"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Finish","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":[],"styles":{},"attributes":{},"innerHTML":"Identity","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4","col-sm-6","portfolio-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["portfolio-link"],"styles":{},"attributes":{"data-toggle":"modal","href":"#portfolioModal1"},"innerHTML":"","generalTextfield":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover-content"],"styles":{},"attributes":{}},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-plus","fa-3x"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLImg","meta":{"tag":"img","classList":["img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/portfolio/04-thumbnail.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-caption"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Lines","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":[],"styles":{},"attributes":{},"innerHTML":"Branding","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4","col-sm-6","portfolio-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["portfolio-link"],"styles":{},"attributes":{"data-toggle":"modal","href":"#portfolioModal1"},"innerHTML":"","generalTextfield":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover-content"],"styles":{},"attributes":{}},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-plus","fa-3x"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLImg","meta":{"tag":"img","classList":["img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/portfolio/05-thumbnail.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-caption"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Southwest","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":[],"styles":{},"attributes":{},"innerHTML":"Website Design","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-md-4","col-sm-6","portfolio-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["portfolio-link"],"styles":{},"attributes":{"data-toggle":"modal","href":"#portfolioModal1"},"innerHTML":"","generalTextfield":""},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-hover-content"],"styles":{},"attributes":{}},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fas","fa-plus","fa-3x"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLImg","meta":{"tag":"img","classList":["img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/portfolio/06-thumbnail.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["portfolio-caption"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Window","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":[],"styles":{},"attributes":{},"innerHTML":"Photography","generalTextfield":"contentEditable"},"children":[]}]}]}]}]}]}
        `,
      },
      {
        toolboxInfo:{
          elementId : 'about',
          elementName : "About",
          mouseFollowerWidth: '600px',
        },
        
        json:`{"name":"HTMLSection","meta":{"tag":"section","classList":["page-section","bg-light"],"styles":{},"attributes":{"id":"about"}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"BSRow","meta":{"tag":"div","classList":["row"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-lg-12","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h2","classList":["section-heading","text-uppercase"],"styles":{},"attributes":{},"innerHTML":"About","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h3","classList":["section-subheading","text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet consectetur.","generalTextfield":"contentEditable"},"children":[]},{"name":"BSRow","meta":{"tag":"div","classList":["row"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-lg-12"],"styles":{},"attributes":{}},"children":[{"name":"HTMLUl","meta":{"tag":"ul","classList":["timeline"],"styles":{},"attributes":{}},"children":[{"name":"HTMLLi","meta":{"tag":"li","classList":[],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-image"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["rounded-circle","img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/about/1.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-panel"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-heading"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"2009-2011","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":["subheading"],"styles":{},"attributes":{},"innerHTML":"Our Humble Beginnings","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-body"],"styles":{},"attributes":{}},"children":[{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!","generalTextfield":"contentEditable"},"children":[]}]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["timeline-inverted"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-image"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["rounded-circle","img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/about/2.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-panel"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-heading"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"March 2011","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":["subheading"],"styles":{},"attributes":{},"innerHTML":"An Agency is Born","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-body"],"styles":{},"attributes":{}},"children":[{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!","generalTextfield":"contentEditable"},"children":[]}]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":[],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-image"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["rounded-circle","img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/about/3.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-panel"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-heading"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"December 2012","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":["subheading"],"styles":{},"attributes":{},"innerHTML":"Transition to Full Service","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-body"],"styles":{},"attributes":{}},"children":[{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!","generalTextfield":"contentEditable"},"children":[]}]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["timeline-inverted"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-image"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["rounded-circle","img-fluid"],"styles":{},"attributes":{"src":"themes/agency/img/about/4.jpg"}},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-panel"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-heading"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"July 2014","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":["subheading"],"styles":{},"attributes":{},"innerHTML":"Phase Two Expansion","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-body"],"styles":{},"attributes":{}},"children":[{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!","generalTextfield":"contentEditable"},"children":[]}]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["timeline-inverted"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["timeline-image"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Be Part&nbsp;<br>Of Our<br>Story!","generalTextfield":"contentEditable"},"children":[]}]}]}]}]}]}]}]}]}]}
        `,
      },
      {
        toolboxInfo:{
          elementId : 'team',
          elementName : "Team",
          mouseFollowerWidth: '600px',
        },
        
        json:`{"name":"HTMLSection","meta":{"tag":"section","classList":["bg-light","page-section"],"styles":{},"attributes":{"id":"team"}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"BSRow","meta":{"tag":"div","classList":["row"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-lg-12","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSHeading","meta":{"tag":"h2","classList":["section-heading","text-uppercase"],"styles":{},"attributes":{},"innerHTML":"Our Amazing Team","generalTextfield":"contentEditable"},"children":[]},{"name":"BSHeading","meta":{"tag":"h3","classList":["section-subheading","text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet consectetur.","generalTextfield":"contentEditable"},"children":[]}]}]},{"name":"BSRow","meta":{"tag":"div","classList":["row","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-sm-4"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["team-member"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["mx-auto","rounded-circle"],"styles":{},"attributes":{"src":"themes/agency/img/team/1.jpg"}},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Kay Garland","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lead Designer","generalTextfield":"contentEditable"},"children":[]},{"name":"HTMLUl","meta":{"tag":"ul","classList":["list-inline","social-buttons"],"styles":{},"attributes":{}},"children":[{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa-twitter","fab"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-facebook"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fab","fa-linkedin-in"],"styles":{},"attributes":{}},"children":[]}]}]}]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-sm-4"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["team-member"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["mx-auto","rounded-circle"],"styles":{},"attributes":{"src":"themes/agency/img/team/2.jpg"}},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Larry Parker","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lead Marketer","generalTextfield":"contentEditable"},"children":[]},{"name":"HTMLUl","meta":{"tag":"ul","classList":["list-inline","social-buttons"],"styles":{},"attributes":{}},"children":[{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa-twitter","fab"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-facebook"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fab","fa-linkedin-in"],"styles":{},"attributes":{}},"children":[]}]}]}]}]}]},{"name":"BSCol","meta":{"tag":"div","classList":["col-sm-4"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["team-member"],"styles":{},"attributes":{}},"children":[{"name":"HTMLImg","meta":{"tag":"img","classList":["mx-auto","rounded-circle"],"styles":{},"attributes":{"src":"themes/agency/img/team/3.jpg"}},"children":[]},{"name":"BSHeading","meta":{"tag":"h4","classList":[],"styles":{},"attributes":{},"innerHTML":"Diana Pertersen","generalTextfield":"contentEditable"},"children":[]},{"name":"BSParagraph","meta":{"tag":"p","classList":["text-muted"],"styles":{},"attributes":{},"innerHTML":"Lead Developer","generalTextfield":"contentEditable"},"children":[]},{"name":"HTMLUl","meta":{"tag":"ul","classList":["list-inline","social-buttons"],"styles":{},"attributes":{}},"children":[{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa-twitter","fab"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-facebook"],"styles":{},"attributes":{}},"children":[]}]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["list-inline-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["d-md-flex","justify-content-md-center","align-items-md-center"],"styles":{},"attributes":{"href":"#"},"innerHTML":"","generalTextfield":""},"children":[{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fab","fa-linkedin-in"],"styles":{},"attributes":{}},"children":[]}]}]}]}]}]}]},{"name":"BSRow","meta":{"tag":"div","classList":["row"],"styles":{},"attributes":{}},"children":[{"name":"BSCol","meta":{"tag":"div","classList":["col-lg-8","mx-auto","text-center"],"styles":{},"attributes":{}},"children":[{"name":"BSParagraph","meta":{"tag":"p","classList":["large","text-muted"],"styles":{},"attributes":{},"innerHTML":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.","generalTextfield":"contentEditable"},"children":[]}]}]}]}]}
        `,
      },

    ],

    initialPage:`[{"name":"BSNavbar","meta":{"tag":"nav","classList":["fixed-top","navbar","navbar-expand-lg","navbar-dark"],"styles":{},"attributes":{"id":"mainNav"}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"BSNavbarBrand","meta":{"tag":"a","classList":["js-scroll-trigger","navbar-brand"],"styles":{},"attributes":{"href":"#page-top"},"innerHTML":"Start RXEditor","generalTextfield":"contentEditable"},"children":[]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["collapse","navbar-collapse"],"styles":{},"attributes":{"id":"navbarResponsive"}},"children":[{"name":"HTMLUl","meta":{"tag":"ul","classList":["navbar-nav","text-uppercase","ml-auto"],"styles":{},"attributes":{}},"children":[{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#services"},"innerHTML":"Services","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#portfolio"},"innerHTML":"Services","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#about"},"innerHTML":"About","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#team"},"innerHTML":"Team","generalTextfield":"contentEditable"},"children":[]}]},{"name":"HTMLLi","meta":{"tag":"li","classList":["nav-item"],"styles":{},"attributes":{}},"children":[{"name":"HTMLA","meta":{"tag":"a","classList":["js-scroll-trigger","nav-link"],"styles":{},"attributes":{"href":"#contact"},"innerHTML":"Contact","generalTextfield":"contentEditable"},"children":[]}]}]}]},{"name":"BSNavbarToggler","meta":{"tag":"button","classList":["navbar-toggler","navbar-toggler-right"],"styles":{},"attributes":{"data-toggle":"collapse","data-target":"#navbarResponsive"}},"children":[{"name":"HTMLSpan","meta":{"tag":"span","classList":[],"styles":{},"attributes":{},"innerHTML":"Menu","generalTextfield":"contentEditable"},"children":[]},{"name":"IconFontAwesome","meta":{"tag":"i","classList":["fa","fa-bars"],"styles":{},"attributes":{}},"children":[]}]}]}]},{"name":"HTMLHeader","meta":{"tag":"header","classList":["masthead"],"styles":{},"attributes":{}},"children":[{"name":"BSContainer","meta":{"tag":"div","classList":["container"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-text"],"styles":{},"attributes":{}},"children":[{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-lead-in"],"styles":{},"attributes":{},"generalTextfield":"contentEditable","innerHTML":"Welcome To Our Studio!"},"children":[]},{"name":"HTMLDiv","meta":{"tag":"div","classList":["intro-heading","text-uppercase"],"styles":{},"attributes":{},"generalTextfield":"contentEditable","innerHTML":"It's Nice To Meet You"},"children":[]},{"name":"BSButton","meta":{"tag":"a","classList":["btn","btn-primary","btn-xl","js-scroll-trigger","text-uppercase"],"styles":{},"attributes":{"href":"#"},"innerHTML":"Tell Me More","generalTextfield":"contentEditable"},"children":[]}]}]}]}]`
  }
}

export {themes}