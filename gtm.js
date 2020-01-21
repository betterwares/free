
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"206",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".split(\"\/\")[1]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products.0.venue"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";return a.replace(\"\\x26amp;\",\"\\x26\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.id)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.name)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.category)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.price)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.item_price)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.variant)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.quantity)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.venue)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.venue_type)},[]).join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return a.reduce(function(a,b){return a.concat(b.partnership)},[]).join()})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"addressLocality"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"type"
    },{
      "function":"__c",
      "vtp_value":"legendonlineservices.co.uk,better.org.uk,betterlessons.org.uk,bettervenues.org.uk,capitadiscovery.co.uk,copperboxarena.org.uk,gll.org,gllcollege.co.uk,gllsportfoundation.org,londonaquaticscentre.org,spaexperience.org.uk,srsleisurestore.com,suttontennisacademy.com,shop.bookin1.com,courseprohome.co.uk,better.booknow.software"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",15],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Other",
      "vtp_map":["list",["map","key",".*\\.legendonlineservices\\.co\\.uk","value","Legend"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"Legend\"===",["escape",["macro",21],8,16],"){var b=",["escape",["macro",22],8,16],",c=b.purchase.products;return b={ecommerce:{currencyCode:b.currencyCode.trim(),purchase:{actionField:{id:b.purchase.actionField.id,affiliation:b.purchase.actionField.affiliation.trim(),revenue:b.purchase.actionField.revenue.trim(),payment_method:b.purchase.actionField.payment_method},products:c.map(function(a){return{name:String(a.name),id:String(a.id),category:String(a.category),price:String(a.price),variant:String(a.variant),\nquantity:String(a.quantity),dimension3:String(a.venue),dimension4:String(a.venue_type),dimension5:String(a.partnership),dimension6:\"not set\",dimension7:\"Legend\"}})}}}}return{ecommerce:",["escape",["macro",22],8,16],"}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","kiosk","value","Kiosk User"]]
    },{
      "function":"__c",
      "vtp_value":"UA-52844763-1"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",17]],["map","index","2","group",["macro",18]],["map","index","3","group",["macro",19]]],
      "vtp_autoLinkDomains":["macro",20],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",23],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","cookieName","value","_rollupGa"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",24]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"-",
      "vtp_name":"venueName"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"banner_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"klevusearchterm"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.couponCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.affiliation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.date_of_ticket_booked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.payment_method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"venueName"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.homepageJoinModuleButtons"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.homepageFacilitiesModuleButtons"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.homepageGetinvolvedModuleButtons"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.homepageBookingModuleButtons"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.dataset.homepageWhatisonModuleButtons"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"addressRegion"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"not specified",
      "vtp_map":["list",["map","key","Abbey SC","value","South Ox"],["map","key","Abbey Pools","value","Cambridge"],["map","key","Abraham Moss LC","value","Manchester"],["map","key","Appleby LC","value","Eden"],["map","key","Arcadia LC","value","Manchester"],["map","key","Archway LC","value","Islington"],["map","key","Avoniel LC","value","Belfast"],["map","key","Ballysillan LC","value","Belfast"],["map","key","Barking Sporthouse","value","Standalones"],["map","key","Bartholomew SC","value","West Ox"],["map","key","Bath S \u0026 LC","value","Banes"],["map","key","Beacon SC","value","South Bucks"],["map","key","Gym Bexleyheath","value","Better Gyms"],["map","key","Blackbrook Pavilion","value","Taunton"],["map","key","Botwell","value","Hillingdon"],["map","key","Gym Bournemouth","value","Better Gyms"],["map","key","Gym Brentwood","value","Better Gyms"],["map","key","Britannia","value","Hackney"],["map","key","Brixton","value","Lambeth"],["map","key","Burnt Oak L C","value","Barnet"],["map","key","Cally Pool","value","Islington"],["map","key","Canons","value","Merton"],["map","key","Carterton LC","value","West Ox"],["map","key","Carterton Pavillion","value","West Ox"],["map","key","Chalfont LC","value","Chiltern"],["map","key","Charlton Lido","value","Standalones"],["map","key","Chelsea SC","value","RB \u0026 C"],["map","key","Cherry Hinton","value","Cambridge"],["map","key","Chesham LC","value","Chiltern"],["map","key","Chew Valley LC","value","Banes"],["map","key","Chiltern Pools","value","Chiltern"],["map","key","Chingford","value","W Forest"],["map","key","Chipping Norton LC","value","West Ox"],["map","key","Church Farm","value","Barnet"],["map","key","Churchill SC","value","Taunton"],["map","key","Clapham LC","value","Lambeth"],["map","key","Clissold","value","Hackney"],["map","key","Cockermouth LC","value","Allerdale"],["map","key","Coldharbour","value","Greenwich (LC)"],["map","key","Gym Connswater","value","Belfast"],["map","key","Copeland Pool \u0026 Gym","value","Copeland"],["map","key","Copper Box Arena","value","QEOP"],["map","key","Copthall L C","value","Barnet"],["map","key","Croft Sports Centre","value","Swindon"],["map","key","Crystal Palace N S C","value","Crystal Palace"],["map","key","Culverhay SC","value","Banes"],["map","key","Delta Tennis Centre","value","Swindon"],["map","key","Didcot Leisure Cent","value","South Ox"],["map","key","Donyngs","value","Reigate \u0026 Banstead"],["map","key","Dorcan Recreation","value","Swindon"],["map","key","Dormers Wells","value","Ealing"],["map","key","Drapers Field","value","W Forest"],["map","key","East End Pool","value","Newcastle 2"],["map","key","East Manchester LC","value","Manchester"],["map","key","Gym East Village","value","Better Gyms"],["map","key","Eastern LC","value","Cardiff"],["map","key","Eldon LC","value","Newcastle 1"],["map","key","Eltham Centre","value","Greenwich (LC)"],["map","key","Evreham SC","value","South Bucks"],["map","key","Fairwater LC","value","Cardiff"],["map","key","Falls LC","value","Belfast"],["map","key","Faringdon LC","value","Vale of White Horse"],["map","key","Ferndale","value","Lambeth"],["map","key","Finchley Lido","value","Barnet"],["map","key","Finsbury LC","value","Islington"],["map","key","Flaxman","value","Lambeth"],["map","key","Gosforth LC","value","Newcastle 1"],["map","key","Greenwich Centre","value","Greenwich (LC)"],["map","key","Grove Wellbeing","value","Belfast"],["map","key","Gurnell","value","Ealing"],["map","key","Hammersmith S F C","value","Ham \u0026 Ful"],["map","key","Gym Harrow","value","Better Gyms"],["map","key","Haydon Centre","value","Swindon"],["map","key","Health Hydro","value","Swindon"],["map","key","Hendon S C","value","Barnet"],["map","key","Henley LC","value","South Ox"],["map","key","Highbury Pool","value","Islington"],["map","key","Highgrove","value","Hillingdon"],["map","key","Horley LC","value","Reigate \u0026 Banstead"],["map","key","Hough End","value","Manchester"],["map","key","Ironmonger Row Baths","value","Islington"],["map","key","Islington Tennis Ctr","value","Islington"],["map","key","John Orwell","value","Tower Hamlets"],["map","key","Kendal LC","value","South Lakes"],["map","key","Kensington LC","value","RB \u0026 C"],["map","key","Kentish Town","value","Camden"],["map","key","Keynsham SC","value","Banes"],["map","key","Kings Hall","value","Hackney"],["map","key","Lambeth Parks","value","Lambeth"],["map","key","Leyton LC","value","W Forest"],["map","key","Leytonstone","value","W Forest"],["map","key","Lillie Road","value","Ham \u0026 Ful"],["map","key","Llanishen LC","value","Cardiff"],["map","key","Maindy LC","value","Cardiff"],["map","key","Manchester Aquatics","value","Manchester"],["map","key","Gym Mere Green","value","Better Gyms"],["map","key","Mile End","value","Tower Hamlets"],["map","key","Morden Park","value","Merton"],["map","key","Moss Side LC","value","Manchester"],["map","key","Newcastle Trampoline","value","Newcastle 2"],["map","key","North City FC","value","Manchester"],["map","key","Gym North Greenwich","value","Better Gyms"],["map","key","Oasis - Camden","value","Camden"],["map","key","Odd Down Fields","value","Banes"],["map","key","Olympia LC","value","Belfast"],["map","key","Pancras Square","value","Camden"],["map","key","Parkside Pools","value","Cambridge"],["map","key","Penrith LC","value","Eden"],["map","key","Pentwyn LC","value","Cardiff"],["map","key","Penylan LCC","value","Cardiff"],["map","key","Peter May","value","Peter May"],["map","key","Phoenix J A","value","Ham \u0026 Ful"],["map","key","Poplar Baths LC","value","Tower Hamlets"],["map","key","Gym Portsmouth","value","Better Gyms"],["map","key","Queensbridge","value","Hackney"],["map","key","Queensmead","value","Hillingdon"],["map","key","Rainbow","value","Rainbow"],["map","key","Rivermead","value","Reading"],["map","key","Gym Romford","value","Better Gyms"],["map","key","Shankill LC","value","Belfast"],["map","key","Gym Sheffield","value","Better Gyms"],["map","key","Gym Sidcup","value","Better Gyms"],["map","key","Sobell LC","value","Islington"],["map","key","Sprinters LC","value","Prestwood"],["map","key","STAR Community Hub","value","Cardiff"],["map","key","Streatham Ice","value","Lambeth"],["map","key","Sutton Sports","value","Standalones"],["map","key","Swindon Oasis","value","Swindon"],["map","key","Swiss Cottage","value","Camden"],["map","key","Tadworth Centre","value","Reigate \u0026 Banstead"],["map","key","Talacre","value","Camden"],["map","key","Taunton Pool","value","Taunton"],["map","key","Gym Teddington","value","Better Gyms"],["map","key","Telford Tennis Cntre","value","Belfast"],["map","key","Thame LC","value","South Ox"],["map","key","Thamesmere","value","Greenwich (LC)"],["map","key","The Link Centre","value","Swindon"],["map","key","Thomas Tallis","value","Greenwich (LC)"],["map","key","Tiller","value","Tower Hamlets"],["map","key","Ulverston LC","value","South Lakes"],["map","key","Vivary Adventure","value","Taunton"],["map","key","Walker Activity Dome","value","Newcastle 2"],["map","key","Gym Walsall Wood","value","Better Gyms"],["map","key","Waltham Forest FGC","value","W Forest"],["map","key","Walthamstow","value","W Forest"],["map","key","Wantage LC","value","Vale of White Horse"],["map","key","Waterfront L C","value","Greenwich (LC)"],["map","key","Wellington SC","value","Taunton"],["map","key","Wellsprings LC","value","Taunton"],["map","key","Wembley LC","value","Standalones"],["map","key","West Denton LC (Gym)","value","Newcastle 2"],["map","key","West Denton LC Pool","value","Newcastle 1"],["map","key","West Norwood HLC","value","Lambeth"],["map","key","Western LC","value","Cardiff"],["map","key","White Horse LC","value","Vale of White Horse"],["map","key","Whitechapel","value","Tower Hamlets"],["map","key","Whitehaven SC","value","Copeland"],["map","key","Whiterock LC","value","Belfast"],["map","key","Wimbledon","value","Merton"],["map","key","Windrush LC","value","West Ox"],["map","key","Workington LC","value","Allerdale"],["map","key","Wythenshawe Forum","value","Manchester"],["map","key","York Hall","value","Tower Hamlets"],["map","key","Bath Pavilion","value","Banes"],["map","key","Ozone ITC","value","Belfast"],["map","key","Gym Basildon","value","Better Gyms"],["map","key","The Sands Centre","value","Carlisle"],["map","key","Bodmin LC","value","Cornwall"],["map","key","Helston SC","value","Cornwall"],["map","key","Liskeard LC","value","Cornwall"],["map","key","Newquay SC","value","Cornwall"],["map","key","Newquay Waterworld","value","Cornwall"],["map","key","Launceston LC","value","Cornwall"],["map","key","St Austell LC","value","Cornwall"],["map","key","Saltash LC","value","Cornwall"],["map","key","Ships \u0026 Castles LC","value","Cornwall"],["map","key","St Ives LC","value","Cornwall"],["map","key","Truro LC","value","Cornwall"],["map","key","Wadebridge LC","value","Cornwall"],["map","key","Swift Road","value","Ealing"],["map","key","Hackney Parks","value","Hackney"],["map","key","Islington Parks","value","Islington"],["map","key","Market Road ATPs","value","Islington"],["map","key","Archbishops Park","value","Lambeth"],["map","key","Fulwood LC","value","Preston"],["map","key","West View LC","value","Preston"],["map","key","London Aquatics","value","QEOP"],["map","key","Rugby LC","value","Rugby"],["map","key","The Park SC","value","South Ox"],["map","key","Gosling Sports Park","value","Welwyn Garden City"],["map","key","Highbury LC","value","Islington"],["map","key","Gym Pinner","value","Better Gyms"],["map","key","The Pools","value","Carlisle"],["map","key","Copeland Bowls \u0026 SC","value","Copeland"],["map","key","Didcot Wave Pool","value","South Ox"],["map","key","Gym Bradford","value","Better Gyms"],["map","key","Gym Ipswich","value","Better Gyms"],["map","key","Morton LC","value","Carlisle"],["map","key","St Georges","value","Tower Hamlets"],["map","key","London Fields Lido","value","Hackney"],["map","key","Gym Belfast","value","Belfast"],["map","key","Gym Holloway","value","Better Gyms"],["map","key","Gym Woolwich","value","Greenwich (LC)"],["map","key","Gym Mitcham","value","Merton"],["map","key","Gym Bexley","value","Better Gyms"],["map","key","Energise","value","York"],["map","key","Belvoir Activity","value","Belfast"],["map","key","Jesus Green Lido","value","Cambridge"],["map","key","Stoke Newington WR","value","Hackney"],["map","key","Keswick LC","value","Allerdale"],["map","key","Sutcliffe Park SC","value","Greenwich (LC)"],["map","key","Gym Lincoln","value","Better Gyms"],["map","key","Girdwood Hub","value","Belfast"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",58],
      "vtp_defaultValue":"not specified",
      "vtp_map":["list",["map","key","Allerdale","value","North"],["map","key","Banes","value","South West"],["map","key","Barnet","value","London West"],["map","key","Belfast","value","Northern Ireland"],["map","key","Better Gyms","value","Better Gyms"],["map","key","Cambridge","value","Central"],["map","key","Camden","value","London West"],["map","key","Cardiff","value","South West"],["map","key","Carlisle","value","North"],["map","key","Chiltern","value","West"],["map","key","Copeland","value","North"],["map","key","Cornwall","value","South West"],["map","key","Crystal Palace","value","London East"],["map","key","Ealing","value","London West"],["map","key","Eden","value","North"],["map","key","Greenwich (LC)","value","London East"],["map","key","Hackney","value","London East"],["map","key","Ham \u0026 Ful","value","London West"],["map","key","Hillingdon","value","London West"],["map","key","Islington","value","London East"],["map","key","Lambeth","value","London West"],["map","key","Manchester","value","North"],["map","key","Merton","value","London West"],["map","key","Newcastle 1","value","North"],["map","key","Newcastle 2","value","North"],["map","key","Peter May","value","London East"],["map","key","Preston","value","North"],["map","key","Prestwood","value","West"],["map","key","QEOP","value","London East"],["map","key","Rainbow","value","London West"],["map","key","RB \u0026 C","value","London West"],["map","key","Reading","value","West"],["map","key","Reigate \u0026 Banstead","value","London West"],["map","key","Rugby","value","Central"],["map","key","South Bucks","value","West"],["map","key","South Lakes","value","North"],["map","key","South Ox","value","West"],["map","key","Standalones","value","Standalones"],["map","key","Swindon","value","West"],["map","key","Taunton","value","South West"],["map","key","Tower Hamlets","value","London East"],["map","key","Vale of White Horse","value","West"],["map","key","W Forest","value","London East"],["map","key","Welwyn Garden City","value","Central"],["map","key","West Ox","value","West"],["map","key","York","value","North"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",83,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better Venues",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Contact Form Submitted",
      "vtp_eventLabel":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Spa Experience",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Gift Card Purchase",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__flc",
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]]],
      "vtp_groupTag":"allpages",
      "vtp_useImageTag":false,
      "vtp_activityTag":"allpa0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":62
    },{
      "function":"__paused",
      "vtp_originalTagType":"fls",
      "tag_id":69
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"857095969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",30],
      "tag_id":72
    },{
      "function":"__flc",
      "vtp_groupTag":"conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"booki0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":74
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"joinn0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":78
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":80
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Homepage Banner Click",
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":94
    },{
      "function":"__flc",
      "vtp_groupTag":"venue0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"venue0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",35]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":110
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":111
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"963439",
      "tag_id":114
    },{
      "function":"__flc",
      "vtp_groupTag":"swims0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-d0",
      "vtp_ordinalType":"STANDARD",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":115
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"extre0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"extre002",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":118
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":120
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-d00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"JS Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["template",["macro",40]," | ",["macro",37]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u12","value",["macro",41]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"extre0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-d0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":130
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"Gift Card",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"In1Solutions Purchase",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":131
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"apply",
      "vtp_useImageTag":false,
      "vtp_activityTag":"apply0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"7563820",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Jobs Role Click",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":141
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"apply",
      "vtp_useImageTag":false,
      "vtp_activityTag":"swimm0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8726792",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":142
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Jobs Video Play",
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":143
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"967684309",
      "vtp_conversionLabel":"TM5zCLjQ9YYBENXhts0D",
      "vtp_url":["macro",30],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":144
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Join Button Click",
      "vtp_eventLabel":["macro",15],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Beta Abandonment",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__flc",
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-j0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":149
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u50","value",["macro",6]],["map","key","u51","value",["macro",5]],["map","key","u52","value",["macro",7]],["map","key","u53","value",["macro",8]],["map","key","u54","value",["macro",9]],["map","key","u55","value",["macro",10]],["map","key","u56","value",["macro",11]],["map","key","u57","value",["macro",12]],["map","key","u58","value",["macro",13]],["map","key","u59","value",["macro",14]],["map","key","u60","value",["macro",44]],["map","key","u61","value",["macro",45]],["map","key","u62","value",["macro",46]],["map","key","u63","value",["macro",41]],["map","key","u64","value",["macro",47]],["map","key","u65","value",["macro",48]]],
      "vtp_revenue":["macro",41],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",46],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"conve0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-e0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":150
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u27","value",["macro",6]]],
      "vtp_revenue":["macro",41],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",46],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"conve0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-b0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":151
    },{
      "function":"__flc",
      "vtp_customVariable":["list",["map","key","u14","value",["macro",49]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"arm-b0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":152
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Scroll Depth",
      "vtp_eventLabel":["macro",50],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Better.org.uk",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Other Better Domain Clickout",
      "vtp_eventLabel":["macro",51],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":156
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"lead",
      "vtp_useImageTag":false,
      "vtp_activityTag":"spacl00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":157
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Activity Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Search",
      "vtp_eventLabel":"Find Activity Near Me",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":161
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":162
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Join Us Module",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":164
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"signup",
      "vtp_useImageTag":false,
      "vtp_activityTag":"gll_a0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":165
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Facilities Module",
      "vtp_eventLabel":["macro",53],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":168
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Get Involved Module",
      "vtp_eventLabel":["macro",54],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":169
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Booking Module",
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":170
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",26],
      "vtp_eventAction":"Booking Module",
      "vtp_eventLabel":["macro",56],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":171
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"lead",
      "vtp_useImageTag":false,
      "vtp_activityTag":"guest0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6709900",
      "vtp_ordinalStandard":["macro",29],
      "vtp_url":["macro",30],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_127",
      "tag_id":174
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_149",
      "tag_id":175
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_207",
      "tag_id":176
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_209",
      "tag_id":177
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_225",
      "tag_id":178
    },{
      "function":"__cl",
      "tag_id":179
    },{
      "function":"__jel",
      "tag_id":180
    },{
      "function":"__cl",
      "tag_id":181
    },{
      "function":"__cl",
      "tag_id":182
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_287",
      "tag_id":183
    },{
      "function":"__cl",
      "tag_id":184
    },{
      "function":"__ytl",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_capturePause":false,
      "vtp_captureProgress":false,
      "vtp_uniqueTriggerId":"529507_289",
      "vtp_enableTriggerStartOption":true,
      "tag_id":185
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_299",
      "tag_id":186
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_301",
      "tag_id":187
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_312",
      "tag_id":188
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"529507_317",
      "vtp_enableTriggerStartOption":true,
      "tag_id":189
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_318",
      "tag_id":190
    },{
      "function":"__cl",
      "tag_id":191
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_350",
      "tag_id":192
    },{
      "function":"__cl",
      "tag_id":193
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_358",
      "tag_id":194
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_359",
      "tag_id":195
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_360",
      "tag_id":196
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"529507_361",
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/i.simpli.fi\/dpx.js?cid=79005\u0026amp;conversion=40\u0026amp;campaign_id=0\u0026amp;m=\n1\u0026amp;tid=copperboxarenaconvpix\u0026amp;sifi_tuid=45755\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1855236131383504\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1855236131383504\u0026amp;ev=PageView\n\n\u0026amp;noscript=1\"\u003E\n\n\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n    \u003Cscript type=\"text\/gtmscript\"\u003Evar _paq=_paq||[];_paq.push([\"trackPageView\"]);_paq.push([\"enableLinkTracking\"]);(function(){var c=(\"https:\"==document.location.protocol?\"https\":\"http\")+\":\/\/www.tag4arm.com\/tags4arm\/\";_paq.push([\"setTrackerUrl\",c+\"tag4arm.php\"]);_paq.push([\"setSiteId\",\"354\"]);var a=document,b=a.createElement(\"script\");a=a.getElementsByTagName(\"script\")[0];b.type=\"text\/javascript\";b.defer=!0;b.async=!0;b.src=c+\"tag4arm.js\";a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":122
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe width=\"0\" height=\"0\" name=\"Trade Desk Tracking - TTD_GLL_JobsLandingPage_20180207_LP_S\" frameborder=\"0\" scrolling=\"no\" src=\"\/\/insight.adsrvr.org\/tags\/jtp2bd4\/f39acn2\/iframe\"\u003E\u003C\/iframe\u003E\n\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8730668;type=invmedia;cat=2uzvcxsw;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\n\n\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=13636694\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n\n\u003Cimg src=\"https:\/\/ads.avocet.io\/s?add=5b3a10437f947c9a510a190d\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/insight.adsrvr.org\/track\/conv\/?adv=jtp2bd4\u0026amp;ct=0:65gy7pn\u0026amp;fmt=3\"\u003E\n\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8730668;type=invmedia;cat=etkwyrp0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=1005136\u0026amp;seg=13636697\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n\n\u003Cimg src=\"https:\/\/ads.avocet.io\/s?add=5b3a10737f947c9a510a1911\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"Start of global snippet: Please do not remove\nPlace this snippet between the \u003Chead\u003E and \u003C\/head\u003E tags on every page of your site.\n--\u0026gt;\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-8816852\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-8816852\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "setup_tags":["list",["tag",77,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-8816852\/invmedia\/596doycx+standard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8816852;type=invmedia;cat=596doycx;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-8816852\/invmedia\/k6xoypxg+standard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8816852;type=invmedia;cat=k6xoypxg;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,send_to:\"DC-8816852\/invmedia\/xrfxtewq+standard\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=8816852;type=invmedia;cat=xrfxtewq;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1855236131383504\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1855236131383504\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1855236131383504\");fbq(\"track\",\"Lead\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1855236131383504\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-WC9BZB4",
      "vtp_gaSettings":["macro",26],
      "tag_id":163
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"shop.bookin1.com"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"ngRouteChange"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.betterlessons.org.uk"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"\/index.php\/email\/"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"www.bettervenues.org.uk\/contact-thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"giftcardpurchase"
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"signup"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_127($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/better.legendonlineservices.co.uk\/enterprise\/ticketingbasket\/confirmation"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"join.better.org.uk"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"beta.better.org.uk|www.better.org.uk"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_299($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"secure-booker.com"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"spaexperience.org.uk"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_149($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"www.better.org.uk"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"banner_click"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"better.org.uk"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"\/search"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"VirtualPageview"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"\/activities-for-kids"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"BOOK"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_207($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"FIND"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_209($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^(www|beta|join).better.org.uk$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.better.org.uk"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/swimschool"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"https:\/\/www.betterlessons.org.uk\/book"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_225($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"extreme.better.org.uk"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.spaexperience.org.uk"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/gift-cards"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"PURCHASE"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",37],
      "arg1":".*legendonlineservices.co.uk.*|.*better.org.uk.*|.*betterlessons.org.uk.*|.*bettervenues.org.uk.*|.*capitadiscovery.co.uk.*|.*copperboxarena.org.uk.*|.*gll.org.*|.*gllcollege.co.uk.*|.*gllsportfoundation.org.*|.*londonaquaticscentre.org.*|.*spaexperience.org.uk.*|.*srsleisurestore.com.*|.*suttontennisacademy.com.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":".*[0-2]$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.pageError"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/jobs"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":".*better.legendonlineservices.co.uk\/.*\/ticketingbasket\/confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"ngTrackPurchase"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"APPLY NOW"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.better.org.uk\/jobs"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"apply now"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"www.better.org.uk\/jobs"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"my.corehr.com"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_287($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"BOOK NOW",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.gllcollege.co.uk\/courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_289($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"switch-banner__link"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"beta.better.org.uk"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_301($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.spaexperience.org.uk\/"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"BOOK NOW"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_312($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/ticketingbasket\/confirmation"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/better.legendonlineservices.co.uk\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/index.php\/return\/success\/booking"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.betterlessons.org.uk"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.bettervenues.org.uk\/contact-thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"www.better.org.uk|beta.better.org.uk"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_317($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"legendonlineservices.co.uk|betterlessons.org.uk|bettervenues.org.uk|capitadiscovery.co.uk|copperboxarena.org.uk|gll.org|gllcollege.co.uk|gllsportfoundation.org|londonaquaticscentre.org|spaexperience.org.uk|srsleisurestore.com|suttontennisacademy.com|shop.bookin1.com|courseprohome.co.uk|better.booknow.software"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_318($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"call-to-action call-to-action--primary call-to-action--facility"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/leisure-centre\/activities\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/leisure-centre\/swindon\/oasis-leisure-centre-swindon"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"Swindon Oasis"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/leisure-centre\/reading\/rivermead-leisure-complex"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"Rivermead"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/leisure-centre\/west-oxfordshire\/windrush-leisure-centre"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"Windrush LC"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_350($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"https:\/\/my.corehr.com"
    },{
      "function":"_cn",
      "arg0":["macro",53],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_358($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_359($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_360($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(^$|((^|,)529507_361($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"\\\/guestpasses\\\/(.*)_$"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"\/new"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"\/nocookies"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"copperboxarena\/complete.aspx"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"www.gllcollege.co.uk"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"\/\/www.gllcollege.co.uk\/swimmingteachers\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/jobs-belfast"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",2],["add",0,3,5,8,17,73,74,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]],
    [["if",2,5],["add",1,11]],
    [["if",6],["add",2]],
    [["if",7,8,9],["add",4]],
    [["if",2,10],["add",6]],
    [["if",11,12,13,14],["add",7,27]],
    [["if",13,15,16,17],["add",9,36]],
    [["if",18,19],["add",10]],
    [["if",20,22],["unless",21],["add",12]],
    [["if",13,23,24,25],["add",13]],
    [["if",13,23,26,27],["add",13]],
    [["if",2,28],["add",14]],
    [["if",13,29,30,31,32],["add",15]],
    [["if",33,34],["add",16]],
    [["if",35,36,37,38],["add",18]],
    [["if",39,40,41],["add",19]],
    [["if",2,43],["add",20]],
    [["if",0,44],["add",21]],
    [["if",38,45,46],["add",22,76]],
    [["if",38,46,47],["add",22,76]],
    [["if",13,48,49,50],["add",23]],
    [["if",38,51,52],["add",24,26,80]],
    [["if",48,53,54],["add",25]],
    [["if",13,55,56,57],["add",28]],
    [["if",13,58,59,60],["add",29]],
    [["if",2,61,62],["add",30]],
    [["if",2,63,64],["add",31]],
    [["if",2,65],["add",32]],
    [["if",66,67,68,69],["add",33]],
    [["if",13,67,70,71],["add",34]],
    [["if",2,20],["add",35]],
    [["if",38,72,73],["add",37]],
    [["if",2,74],["add",38]],
    [["if",2,75],["add",38]],
    [["if",2,76],["add",39]],
    [["if",2,77],["add",39]],
    [["if",2,78],["add",40]],
    [["if",2,79],["add",40]],
    [["if",13,80,81],["add",41]],
    [["if",38,82],["add",42,82]],
    [["if",13,84],["unless",83],["add",43]],
    [["if",13,86],["unless",85],["add",44]],
    [["if",13,88],["unless",87],["add",45]],
    [["if",13,90],["unless",89],["add",46]],
    [["if",2,91],["unless",92,93],["add",47]],
    [["if",2,94],["add",72]],
    [["if",2,18,42],["add",75],["block",19]],
    [["if",2,95],["add",77,78]],
    [["if",2,96],["add",79]],
    [["if",2,97],["add",81]],
    [["if",0,2],["block",0]],
    [["if",2,3,4],["block",0]]]
},
"runtime":[]



};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={Oe:!0},fa={};try{fa.__proto__=ea;da=fa.Oe;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},C=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return lb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Dc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.qf(d,k))}catch(y){b.de&&b.de(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Bb(a[n],b,c);xb&&(m=m||q===xb.pb);d.push(q)}return xb&&m?xb.tf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ua(a[1])&&"macro"===a[1][0]&&xb.ag(a))return xb.Ag(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Zd:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Fb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{md:a("convert_case_to"),nd:a("convert_false_to"),od:a("convert_null_to"),pd:a("convert_true_to"),qd:a("convert_undefined_to"),ih:a("debug_mode_metadata"),oa:a("function"),Ee:a("instance_name"),Ge:a("live_only"),He:a("malware_disabled"),Ie:a("metadata"),oh:a("original_vendor_template_id"),Je:a("once_per_event"),Ad:a("once_per_load"),Fd:a("setup_tags"),Hd:a("tag_id"),Id:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Jb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Hb(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,Zb=navigator,$b=F.currentScript&&F.currentScript.src,ac=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},bc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},cc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;bc(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var g=ka.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},dc=function(){if($b){var a=$b.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);bc(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var rc=F.querySelectorAll(":root");rc&&1==rc.length&&rc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var H={na:"_ee",fc:"event_callback",Pa:"event_timeout",D:"gtag.config",T:"allow_ad_personalization_signals",gc:"restricted_data_processing",W:"cookie_expires",Oa:"cookie_update",xa:"session_duration",ba:"user_properties"};var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Ea(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],m:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];za(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.m[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.s="GTM-W452ST";Nc.tb="181";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.s+"&cv=206",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},I=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var cd=function(){return"&tc="+sb.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.cg()||0>=md--?(I("GTM",1),kd[gd]=!0):(ld.Jg(),fc(nd()),hd[gd]=!0,od=pd=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[qd,hd[a]?"":"&es=1",rd[a],b?"&u="+b:"",c?"&ut="+c:"",cd(),id,jd,pd,od,"&z=0"].join("")},sd=function(){return[Wc,"&v=3&t=t","&pid="+
wa(),"&rv="+Nc.tb].join("")},td="0.005000">Math.random(),qd=sd(),ud=function(){qd=sd()},hd={},id="",jd="",od="",pd="",gd=void 0,rd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{cg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Jg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),md=1E3,vd=function(a,b){if(td&&!kd[a]&&gd!==a){ed();gd=a;od=id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";rd[a]="&e="+c+"&eid="+a;fd()}},wd=function(a,b,c){if(td&&!kd[a]&&
b){a!==gd&&(ed(),gd=a);var d,e=String(b[Gb.oa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var g=c+d;id=id?id+"."+g:"&tr="+g;fd();2022<=nd().length&&ed()}},xd=function(a,b,c){if(td&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+
"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var yd={},zd=new xa,Ad={},Bd={},Ed={name:"dataLayer",set:function(a,b){C(La(a,b),Ad);Cd()},get:function(a){return Dd(a,2)},reset:function(){zd=new xa;Ad={};Cd()}},Dd=function(a,b){if(2!=b){var c=zd.get(a);if(td){var d=Fd(a);c!==d&&I("GTM",5)}return c}return Fd(a)},Fd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Hd(d)},Hd=function(a){for(var b=Ad,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jd=function(a,b){Bd.hasOwnProperty(a)||(zd.set(a,b),C(La(a,b),Ad),Cd())},Cd=function(a){za(Bd,function(b,c){zd.set(b,c);C(La(b,void 0),Ad);C(La(b,c),Ad);a&&delete Bd[b]})},Kd=function(a,b,c){yd[a]=yd[a]||{};var d=1!==c?Fd(b):zd.get(b);"array"===Na(d)||"object"===Na(d)?yd[a][b]=C(d):yd[a][b]=d},Ld=function(a,b){if(yd[a])return yd[a][b]};var Md=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Nd()||d||"http:"!=D.location.protocol?a:b)+c},Nd=function(){var a=dc(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var be=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ce={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},de={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ee="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ge=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Dd("gtm.whitelist");b&&I("GTM",9);
var c=b&&Ka(Da(b),ce),d=Dd("gtm.blacklist");d||(d=Dd("tagTypeBlacklist"))&&I("GTM",3);d?I("GTM",8):d=[];fe()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),de),g={};return function(h){var k=h&&h[Gb.oa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,ee));return g[k]=v}},fe=function(){return be.test(D.location&&D.location.hostname)};var he={qf:function(a,b){b[Gb.md]&&"string"===typeof a&&(a=1==b[Gb.md]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.od)&&null===a&&(a=b[Gb.od]);b.hasOwnProperty(Gb.qd)&&void 0===a&&(a=b[Gb.qd]);b.hasOwnProperty(Gb.pd)&&!0===a&&(a=b[Gb.pd]);b.hasOwnProperty(Gb.nd)&&!1===a&&(a=b[Gb.nd]);return a}};var ie={active:!0,isWhitelisted:function(){return!0}},je=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var ke=function(){};var le=!1,me=0,ne=[];function oe(a){if(!le){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){le=!0;for(var e=0;e<ne.length;e++)G(ne[e])}ne.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function pe(){if(!le&&140>me){me++;try{F.documentElement.doScroll("left"),oe()}catch(a){D.setTimeout(pe,50)}}}var qe=function(a){le?a():ne.push(a)};var re={},se={},te=function(a,b,c,d){if(!se[a]||Qc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return se[a].tags.push(e)-1},ue=function(a,b,c,d){if(se[a]){var e=se[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ve(a){for(var b=re[a]||[],c=0;c<b.length;c++)b[c]();re[a]={push:function(d){d(Nc.s,se[a])}}}
var ye=function(a,b,c){se[a]={tags:[]};qa(b)&&we(a,b);c&&D.setTimeout(function(){return ve(a)},Number(c));return xe(a)},we=function(a,b){re[a]=re[a]||[];re[a].push(Ha(function(){return G(function(){b(Nc.s,se[a])})}))};function xe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&ve(a)})},Ze:function(){d=!0;b>=c&&ve(a)}}};var ze=function(){function a(d){return!ra(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ed.get("gtm.start"))?Ed.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var De=!1,Ee=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Fe=!1;
var Ge=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ze();return D[b]},He=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ee();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Je=function(){},Ie=function(){return D.GoogleAnalyticsObject||"ga"};var Le=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Me=/:[0-9]+$/,Ne=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Qe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Oe(a.protocol)||Oe(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Me,"").toLowerCase());var g=b,h,k=Oe(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Pe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Me,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ne(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Oe=function(a){return a?a.replace(":","").toLowerCase():""},Pe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Re=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Me,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function We(a,b,c,d){var e=sb[a],g=Xe(a,b,c,d);if(!g)return null;var h=Bb(e[Gb.Fd],c,[]);if(h&&h.length){var k=h[0];g=We(k.index,{B:g,w:1===k.Zd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Xe(a,b,c,d){function e(){if(g[Gb.He])k();else{var w=Cb(g,c,[]),y=te(c.id,String(g[Gb.oa]),Number(g[Gb.Hd]),w[Gb.Ie]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-B;wd(c.id,sb[a],"5");ue(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-B;wd(c.id,sb[a],"6");ue(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;wd(c.id,g,"1");var z=function(){var A=Fa()-B;wd(c.id,g,"7");ue(c.id,y,"exception",A);x||(x=!0,k())};var B=Fa();try{Ab(w,c)}catch(A){z(A)}}}var g=sb[a],h=b.B,k=b.w,l=b.terminate;if(c.Dc(g))return null;var m=Bb(g[Gb.Id],c,[]);if(m&&m.length){var n=m[0],q=We(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Zd?l:q}if(g[Gb.Ad]||g[Gb.Je]){var u=g[Gb.Ad]?tb:c.Sg,p=h,t=k;if(!u[a]){e=Ha(e);var v=Ye(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function Ye(a,b,c){var d=[],e=[];b[a]=Ze(d,e,c);return{B:function(){b[a]=$e;for(var g=0;g<d.length;g++)d[g]()},w:function(){b[a]=af;for(var g=0;g<e.length;g++)e[g]()}}}function Ze(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function $e(a){a()}function af(a,b){b()};var df=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.hb[d]){var e=sb[d];var g=b.add();try{var h=We(d,{B:g,w:g,terminate:g},a,d);h?c.push({qe:d,ke:Db(e),Bf:h}):(bf(d,a),g())}catch(l){g()}}b.Ze();c.sort(cf);for(var k=0;k<c.length;k++)c[k].Bf();return 0<c.length};function cf(a,b){var c,d=b.ke,e=a.ke;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.qe,k=b.qe;g=h>k?1:h<k?-1:0}return g}
function bf(a,b){if(!td)return;var c=function(d){var e=b.Dc(sb[d])?"3":"4",g=Bb(sb[d][Gb.Fd],b,[]);g&&g.length&&c(g[0].index);wd(b.id,sb[d],e);var h=Bb(sb[d][Gb.Id],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ef=!1,ff=function(a,b,c,d,e){if("gtm.js"==b){if(ef)return!1;ef=!0}vd(a,b);var g=ye(a,d,e);Kd(a,"event",1);Kd(a,"ecommerce",1);Kd(a,"gtm");var h={id:a,name:b,Dc:ge(c),hb:[],Sg:[],de:function(){I("GTM",6)}};h.hb=Kb(h);var k=df(h,g);
if(!k)return k;for(var l=0;l<h.hb.length;l++)if(h.hb[l]){var m=sb[l];if(m&&!Qc[String(m[Gb.oa])])return!0}return!1};var hf=/^https?:\/\/www\.googletagmanager\.com/;function jf(){var a;return a}function lf(a,b){}
function kf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function mf(){var a=!1;return a};var nf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},of=function(a){var b=new nf;b.eventModel=a;return b},pf=function(a,b){a.targetConfig=b;return a},qf=function(a,b){a.containerConfig=b;return a},rf=function(a,b){a.h=b;return a},sf=function(a,b){a.globalConfig=b;return a},tf=function(a,b){a.B=b;return a},uf=function(a,b){a.w=b;return a};
nf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var vf=function(a){function b(e){za(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var wf={},xf=["G"];wf.se="";var yf=wf.se.split(",");function zf(){var a=Oc;return a.gcq=a.gcq||new Af}
var Bf=function(a,b,c){zf().register(a,b,c)},Cf=function(a,b,c,d){zf().push("event",[b,a],c,d)},Df=function(a,b){zf().push("config",[a],b)},Ef={},Ff=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},Gf=function(a,b,c,d,e){this.type=a;this.o=b;this.M=c||"";this.h=d;this.i=e},Af=function(){this.i={};this.o={};this.h=[]},Hf=function(a,b){var c=Kc(b);return a.i[c.containerId]=a.i[c.containerId]||new Ff},If=function(a,b,c,d){if(d.M){var e=Hf(a,d.M),
g=e.o;if(g){var h=C(c),k=C(e.targetConfig[d.M]),l=C(e.containerConfig),m=C(e.i),n=C(a.o),q=Dd("gtm.uniqueEventId"),u=Kc(d.M).prefix,p=uf(tf(sf(rf(qf(pf(of(h),k),l),m),n),function(){xd(q,u,"2");}),function(){xd(q,u,"3");});try{xd(q,u,"1");3===g.length?g(b,d.o,p):4===g.length&&g(d.M,b,d.o,
p)}catch(t){xd(q,u,"4");}}}};
Af.prototype.register=function(a,b,c){if(3!==Hf(this,a).status){Hf(this,a).o=b;Hf(this,a).status=3;c&&(Hf(this,a).i=c);var d=Kc(a),e=Ef[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Dd("gtm.uniqueEventId"),l=h,m=Fa()-g;if(td&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);pd=pd?pd+","+n:"&cl="+n}delete Ef[d.containerId]}this.flush()}};
Af.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Hf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Hf(this,c).status=2,this.push("require",[],g.containerId),Ef[g.containerId]=Fa(),!Md())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";cc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Gf(a,e,c,b,d));d||this.flush()};
Af.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Hf(this,c.M).status&&!a)return;break;case "set":za(c.h[0],function(l,m){C(La(l,m),b.o)});break;case "config":var d=c.h[0],e=!!d[H.Fb];delete d[H.Fb];var g=Hf(this,c.M),h=Kc(c.M),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.M]={});g.h&&e||If(this,H.D,d,c);g.h=!0;delete d[H.na];k?C(d,g.containerConfig):C(d,g.targetConfig[c.M]);break;
case "event":If(this,c.h[1],c.h[0],c)}this.h.shift()}};var Jf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Mf=function(a,b,c,d){var e=Kf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Lf(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Lf(e,function(g){return g.ib},c);return e[0]?e[0].id:void 0}};
function Nf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Jf(b,e).indexOf(c)}
var Rf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Of(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Pf(y,u)&&Nf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Pf(q,u)&&Nf(m,a,l)}return k};function Lf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Kf(a,b){for(var c=[],d=Jf(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,ib:1*k[1]||1}))}}return c}
var Sf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Tf=/(^|\.)doubleclick\.net$/i,Pf=function(a,b){return Tf.test(document.location.hostname)||"/"===b&&Sf.test(a)},Of=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Tf.test(e)||Sf.test(e)||a.push("none");return a};var Uf="".split(/,/),Vf=!1;var Wf=null,Xf={},Yf={},Zf;function $f(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.fc]&&(c.eventCallback=b[H.fc]),b[H.Pa]&&(c.eventTimeout=b[H.Pa]));return c}
var fg={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=$f(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).xh().h(a[1],a[2])},set:function(a){var b;2==a.length&&
Pa(a[1])?b=C(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||ua(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},gg={policy:!0};var hg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},jg=function(a){var b=ig(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var wg=function(a){if(vg(a))return a;this.h=a};wg.prototype.Jf=function(){return this.h};var vg=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};wg.prototype.getUntrustedUpdateValue=wg.prototype.Jf;var xg=!1,yg=[];function zg(){if(!xg){xg=!0;for(var a=0;a<yg.length;a++)G(yg[a])}}var Ag=function(a){xg?G(a):yg.push(a)};var Bg=[],Cg=!1,Dg=function(a){return D["dataLayer"].push(a)},Eg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Fg(a){var b=a._clear;za(a,function(g,h){"_clear"!==g&&(b&&Jd(g,void 0),Jd(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Jd("gtm.uniqueEventId",d));Vc=c;var e=Gg(a);Vc=
null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Gg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.s,c):ie;return d.active?ff(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Hg(){for(var a=!1;!Cg&&0<Bg.length;){Cg=!0;delete Ad.eventModel;Cd();var b=Bg.shift();if(null!=b){var c=vg(b);if(c){var d=b;b=vg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Dd(h,1);if(ua(k)||Pa(k))k=C(k);Bd[h]=k}}try{if(qa(b))try{b.call(Ed)}catch(v){}else if(ua(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Dd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var t=fg[b[0]];if(t&&(!c||!gg[b[0]])){b=t(b);break a}}b=void 0}if(!b){Cg=!1;continue}}a=Fg(b)||a}}finally{c&&Cd(!0)}}Cg=!1}
return!a}function Ig(){var a=Hg();try{hg(D["dataLayer"],Nc.s)}catch(b){}return a}
var Kg=function(){var a=ac("dataLayer",[]),b=ac("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};qe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ag(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new wg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Bg.push.apply(Bg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Hg()&&h};Bg.push.apply(Bg,a.slice(0));Jg()&&G(Ig)},Jg=function(){var a=!0;return a};var Lg={};Lg.pb=new String("undefined");
var Mg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Lg.pb?b:a[d]);return c.join("")}};Mg.prototype.toString=function(){return this.h("undefined")};Mg.prototype.valueOf=Mg.prototype.toString;Lg.Me=Mg;Lg.nc={};Lg.tf=function(a){return new Mg(a)};var Ng={};Lg.Kg=function(a,b){var c=Zc();Ng[c]=[a,b];return c};Lg.Wd=function(a){var b=a?0:1;return function(c){var d=Ng[c];if(d&&"function"===typeof d[b])d[b]();Ng[c]=void 0}};Lg.ag=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Lg.Ag=function(a){if(a===Lg.pb)return a;var b=Zc();Lg.nc[b]=a;return'google_tag_manager["'+Nc.s+'"].macro('+b+")"};Lg.ng=function(a,b,c){a instanceof Lg.Me&&(a=a.h(Lg.Kg(b,c)),b=pa);return{Bc:a,B:b}};var Og=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Pg=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Qg=function(a,b,c){Pg(a)[b]=c},Rg=function(a,b,c,d){var e=Pg(a),g=Ga(e,b,d);e[b]=c(g)},Sg=function(a,b,c){var d=Pg(a);return Ga(d,b,c)};var Tg=function(){for(var a=Zb.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Wg=function(a,b,c,d){var e=Ug(b);return Mf(a,e,Vg(c),d)},Xg=function(a,b,c,d){var e=""+Ug(c),g=Vg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Ug=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Vg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Yg=["1"],Zg={},ch=function(a,b,c,d){var e=$g(a);Zg[e]||ah(e,b,c)||(bh(e,Tg(),b,c,d),ah(e,b,c))};function bh(a,b,c,d,e){var g=Xg(b,"1",d,c);Rf(a,g,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function ah(a,b,c){var d=Wg(a,b,c,Yg);d&&(Zg[a]=d);return d}function $g(a){return(a||"_gcl")+"_au"};var dh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({$c:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].$c]||(g[a[h].$c]=[]),g[a[h].$c].push({timestamp:k[1],Gf:k[2]}))}return g};function eh(){for(var a=fh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function gh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var fh,hh;function ih(a){fh=fh||gh();hh=hh||eh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(fh[l],fh[m],fh[n],fh[q])}return b.join("")}
function jh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=hh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}fh=fh||gh();hh=hh||eh();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var kh;function lh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ph=function(){var a=mh,b=nh,c=oh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){gc(F,"mousedown",d);gc(F,"keyup",d);gc(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},oh=function(){var a=ac("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qh=/(.*?)\*(.*?)\*(.*)/,rh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,sh=/^(?:www\.|m\.|amp\.)+/,th=/([^?#]+)(\?[^#]*)?(#.*)?/,uh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,wh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ih(String(d))))}var e=b.join("*");return["1",vh(e),e].join("*")},vh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=kh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}kh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^kh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},yh=function(){return function(a){var b=Re(D.location.href),c=b.search.replace("?",""),d=Ne(c,"_gl",!0)||"";a.query=xh(d)||{};var e=Qe(b,"fragment").match(uh);a.fragment=xh(e&&e[3]||
"")||{}}},zh=function(){var a=yh(),b=oh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},xh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=qh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===vh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=jh(u[p+1]);return q}}}}catch(t){}};
function Ah(a,b,c){function d(m){var n=m,q=uh.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=th.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Bh(a,b,c){for(var d={},e={},g=oh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&lh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=wh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=Ah(l,a.action);Le.test(v)&&(a.action=v)}}}else Ch(l,a,!1)}if(!c&&Ja(e)){var w=wh(e);Ch(w,a,!0)}}function Ch(a,b,c){if(b.href){var d=Ah(a,b.href,void 0===c?!1:c);Le.test(d)&&(b.href=d)}}
var mh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Bh(e,e.hostname,!1)}}catch(h){}},nh=function(a){try{if(a.action){var b=Qe(Re(a.action),"host");Bh(a,b,!0)}}catch(c){}},Dh=function(a,b,c,d){ph();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};oh().decorators.push(e)},Eh=function(){var a=F.location.hostname,b=rh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(sh,""),l=e.replace(sh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Fh=function(a,b){return!1===a?!1:a||b||Eh()};var Gh={};var Hh=/^\w+$/,Ih=/^[\w-]+$/,Jh=/^~?[\w-]+$/,Kh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Lh(a){return a&&"string"==typeof a&&a.match(Hh)?a:"_gcl"}var Nh=function(){var a=Re(D.location.href),b=Qe(a,"query",!1,void 0,"gclid"),c=Qe(a,"query",!1,void 0,"gclsrc"),d=Qe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ne(e,"gclid",void 0);c=c||Ne(e,"gclsrc",void 0)}return Mh(b,c,d)};
function Mh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Ih))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Gh.gtm_3pds?0:Gh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Ph=function(a){var b=Nh();Oh(b,a)};
function Oh(a,b,c){function d(q,u){var p=Qh(q,e);p&&Rf(p,u,h,g,l,!0)}b=b||{};var e=Lh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ja?7776E3:b.Ja;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Ih?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Sh=function(a,b,c,d,e){for(var g=zh(),h=Lh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Kh[l]){var m=Qh(l,h),n=g[m];if(n){var q=Math.min(Rh(n),Fa()),u;b:{for(var p=q,t=Jf(m,F.cookie),v=0;v<t.length;++v)if(Rh(t[v])>p){u=!0;break b}u=!1}u||Rf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Oh(Mh(g.gclid,g.gclsrc),w)},Qh=function(a,b){var c=Kh[a];if(void 0!==c)return b+c},Rh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Th(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Uh=function(a,b,c,d,e){if(ua(b)){var g=Lh(e);Dh(function(){for(var h={},k=0;k<a.length;++k){var l=Qh(a[k],g);if(l){var m=Jf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Vh=function(a){return a.filter(function(b){return Jh.test(b)})},Wh=function(a,b){for(var c=Lh(b&&b.prefix),d={},e=0;e<a.length;e++)Kh[a[e]]&&(d[a[e]]=Kh[a[e]]);za(d,function(g,h){var k=Jf(c+h,F.cookie);if(k.length){var l=k[0],m=Rh(l),n={};n[g]=[Th(l)];Oh(n,b,m)}})};var Xh=/^\d+\.fls\.doubleclick\.net$/;function Yh(a){var b=Re(D.location.href),c=Qe(b,"host",!1);if(c&&c.match(Xh)){var d=Qe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Zh(a,b){if("aw"==a||"dc"==a){var c=Yh("gcl"+a);if(c)return c.split(".")}var d=Lh(b);if("_gcl"==d){var e;e=Nh()[a]||[];if(0<e.length)return e}var g=Qh(a,d),h;if(g){var k=[];if(F.cookie){var l=Jf(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Th(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Vh(k)}else h=k}else h=k}else h=[];return h}
var $h=function(){var a=Yh("gac");if(a)return decodeURIComponent(a);var b=dh(),c=[];za(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Gf);g=Vh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},ai=function(a,b,c,d,e){ch(b,c,d,e);var g=Zg[$g(b)],h=Nh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;Zb.sendBeacon&&Zb.sendBeacon(u)||fc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=$g(b),t=Zg[p];t&&bh(p,t,c,d,e)}};var bi;if(3===Nc.tb.length)bi="g";else{var ci="G";bi=ci}
var di={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:bi,OPT:"o"},ei=function(a){var b=Nc.s.split("-"),c=b[0].toUpperCase(),d=di[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.tb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Nc.tb+e};
var fi=function(a){return!(void 0===a||null===a||0===(a+"").length)},gi=function(a,b){var c;if(2===b.V)return a("ord",wa(1E11,1E13)),!0;if(3===b.V)return a("ord","1"),a("num",wa(1E11,1E13)),!0;if(4===b.V)return fi(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.V)c="1";else if(6===b.V)c=b.Uc;else return!1;fi(c)&&a("qty",c);fi(b.Eb)&&a("cost",b.Eb);fi(b.transactionId)&&a("ord",b.transactionId);return!0},hi=encodeURIComponent,ii=function(a,b){function c(n,q,u){g.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(u?q:hi(q)))}var d=a.xc,e=a.protocol;e+=a.Tb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+hi(d)+(";type="+hi(a.zc))+(";cat="+hi(a.$a));var g=a.vf||{};za(g,function(n,q){e+=";"+hi(n)+"="+hi(q+"")});if(gi(c,a)){fi(a.Zb)&&c("u",a.Zb);fi(a.Yb)&&c("tran",a.Yb);c("gtm",ei());!1===a.We&&c("npa","1");if(a.wc){var h=Zh("dc",a.Ea);h&&h.length&&c("gcldc",h.join("."));var k=Zh("aw",a.Ea);k&&k.length&&c("gclaw",k.join("."));var l=$h();l&&c("gac",l);ch(a.Ea,void 0,a.rf,a.sf);
var m=Zg[$g(a.Ea)];m&&c("auiddc",m)}fi(a.Pc)&&c("prd",a.Pc,!0);za(a.bd,function(n,q){c(n,q)});e+=b||"";fi(a.Pb)&&c("~oref",a.Pb);a.Tb?ec(e+"?",a.B):fc(e+"?",a.B,a.w)}else G(a.w)};var ji=["input","select","textarea"],ki=["button","hidden","image","reset","submit"],li=function(a){var b=a.tagName.toLowerCase();return!va(ji,function(c){return c===b})||"input"===b&&va(ki,function(c){return c===a.type.toLowerCase()})?!1:!0},mi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},ni=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(li(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var qi=!!D.MutationObserver,ri=void 0,si=function(a){if(!ri){var b=function(){var c=F.body;if(c)if(qi)(new MutationObserver(function(){for(var e=0;e<ri.length;e++)G(ri[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ri.length;e++)G(ri[e])}))})}};ri=[];F.body?b():G(b)}ri.push(a)};
var Di=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ei=function(a){var b=Di(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Fi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};
var Ni=function(a,b,c){function d(){var h=a();g+=e?(Fa()-e)*h.playbackRate/1E3:0;e=Fa()}var e=0,g=0;return{Ib:function(h,k,l){var m=a(),n=m.Xd,q=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Xd*k):Math.round(m.uf),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),p=F.hidden?!1:.5<=Ei(c);d();var t=Og(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(n);t["gtm.videoCurrentTime"]=
Math.round(q);t["gtm.videoElapsedTime"]=Math.round(g);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;Dg(t)},Mg:function(){e=Fa()},oc:function(){d()}}};var Oi=D.clearTimeout,Pi=D.setTimeout,R=function(a,b,c){if(Md()){b&&G(b)}else return cc(a,b,c)},Qi=function(){return D.location.href},Ri=function(a){return Qe(Re(a),"fragment")},Si=function(a){return Pe(Re(a))},W=function(a,b){return Dd(a,b||2)},Ti=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Dg(a)):d=Dg(a);return d},Ui=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Vi=function(a,b,c){return Jf(a,b,void 0===c?!0:!!c)},Wi=function(a,b){if(Md()){b&&G(b)}else ec(a,b)},Xi=function(a){return!!Sg(a,"init",!1)},Yi=function(a){Qg(a,"init",!0)},Zi=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},$i=function(a,b){var c=a[b];return c};
var aj=Lg.ng;var bj;var yj=new xa;function zj(a,b){function c(h){var k=Re(h),l=Qe(k,"protocol"),m=Qe(k,"host",!0),n=Qe(k,"port"),q=Qe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Aj(a){return Bj(a)?1:0}
function Bj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Aj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=yj.get(p);t||(t=new RegExp(c,u),yj.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return zj(b,
c)}return!1};var Cj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Dj={},Ej=encodeURI,Y=encodeURIComponent,Fj=fc;var Gj=function(a,b){if(!a)return!1;var c=Qe(Re(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Hj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Dj.bg=function(){var a=!1;return a};var Uk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var el=window,fl=document,gl=function(a){var b=el._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===el["ga-disable-"+a])return!0;try{var c=el.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Jf("AMP_TOKEN",fl.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fl.getElementById("__gaOptOutExtension")?!0:!1};var jl=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ba]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var nl=function(a,b,c){Cf(b,c,a)},ol=function(a,b,c){Cf(b,c,a,!0)},ql=function(a,b){};
function pl(a,b){}var Z={a:{}};

Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),A=0;A<B.length;A++){var E=Number(B[A]);if(isNaN(E))return[];n.test(B[A])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=Di(),A=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+A,z);return{wf:x,xf:z}}}function d(){p=X("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,z,B,A){var E=l(z),J={},M;for(M in E){J.wa=M;if(E.hasOwnProperty(J.wa)){var U=Number(J.wa);x<U||(Ti({event:"gtm.scrollDepth","gtm.scrollThreshold":U,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":A,"gtm.triggers":E[J.wa].join(",")}),Rg("sdl",z,function(V){return function(S){delete S[V.wa];return S}}(J),{}))}J={wa:J.wa}}}function g(){var x=y(),z=x.wf,B=x.xf,A=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.rb,u.sd);e(A,"horiz.pct",q.qb,u.sd);e(B,"vert.pix",q.rb,u.Md);e(E,"vert.pct",q.qb,u.Md);Qg("sdl","pending",!1)}function h(){var x=250,z=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,z=!0);var B=0,A=!1,E=function(){A?B=Pi(E,x):(B=0,g(),Xi("sdl")&&!a()&&(hc(p,"scroll",J),hc(p,"resize",J),Qg("sdl","init",!1)));A=!1},J=function(){z&&y();B?A=!0:(B=Pi(E,x),Qg("sdl","pending",!0))};return J}function k(x,z,B){if(z){var A=b(String(x));Rg("sdl",B,function(E){for(var J=0;J<A.length;J++){var M=
String(A[J]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(z)}return E},{})}}function l(x){return Sg("sdl",x,{})}function m(x){G(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,A=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,J=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.rb:k(B,z,"horiz.pix");break;case q.qb:k(A,z,"horiz.pct")}switch(E){case q.rb:k(J,z,"vert.pix");break;case q.qb:k(M,
z,"vert.pct")}Xi("sdl")?Sg("sdl","pending")||(w||(d(),w=!0),G(function(){return g()})):(d(),w=!0,v&&(Yi("sdl"),Qg("sdl","pending",!0),G(function(){g();if(a()){var U=h();gc(p,"scroll",U);gc(p,"resize",U)}else Qg("sdl","init",!1)})))}var n=/^\s*$/,q={qb:"PERCENT",rb:"PIXELS"},u={Md:"vertical",sd:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Ag(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;ii(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Hj(b.vtp_customVariable||[],"key","value")||{},e={$a:b.vtp_activityTag,wc:c,Ea:b.vtp_conversionCookiePrefix||void 0,Eb:void 0,V:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,xc:b.vtp_advertiserId,zc:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,
Pb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Uc:void 0,Tb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Yb:b.vtp_transactionVariable,transactionId:void 0,Zb:b.vtp_userVariable,bd:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,X("google_attr").build([Hj(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;ze();R(b,function(){var d=X("google_trackConversion");if(qa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Hj(a.vtp_customParams,
"key","value"));var g={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(g.value=a.vtp_eventValue),a.vtp_eventItems&&(g.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:ei()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ld(a.vtp_gtmEventId,"event"))})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Og(c,"gtm.click");Ti(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Xi("cl")){var c=X("document");gc(c,"click",a,!0);Yi("cl")}G(b.vtp_gtmOnSuccess)})}();

Z.a.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;ii(b,c)}(function(b){Z.__fls=b;Z.__fls.b="fls";Z.__fls.g=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(q){q=q||[];for(var u=[],p=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],t=0;t<q.length;t++)for(var v=0;v<p.length;v++){var w=p[v],y=q[t][w[1]];void 0!==y&&u.push(w[0]+
(t+1)+":"+Y(y))}return u.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(W("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),g=0;g<e.length;g++){var h=e[g].split(":");h[1]=h[1]&&Y(h[1])||"";e[g]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Hj(b.vtp_customVariable||
[],"key","value")||{},m={$a:b.vtp_activityTag,wc:k,Ea:b.vtp_conversionCookiePrefix||void 0,Eb:b.vtp_revenue,V:"ITEM_SOLD"===b.vtp_countingMethod?6:5,xc:b.vtp_advertiserId,zc:b.vtp_groupTag,w:b.vtp_gtmOnFailure,B:b.vtp_gtmOnSuccess,Pb:b.vtp_useImageTag?void 0:b.vtp_url,Pc:c,protocol:"",Uc:b.vtp_quantity,Tb:!b.vtp_useImageTag,Yb:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Zb:b.vtp_userVariable,bd:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,X("google_attr").build([Hj(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=W("gtm.url",1);c=c||Qi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Si(String(c));var e=Re(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Qe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Qe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Hj(n.vtp_fieldsToSet,"fieldName","value"),g);C(Hj(n.vtp_contentGroup,"index","group"),h);C(Hj(n.vtp_dimension,"index","dimension"),k);C(Hj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Hj(d.vtp_fieldsToSet,"fieldName","value"),g);C(Hj(d.vtp_contentGroup,
"index","group"),h);C(Hj(d.vtp_dimension,"index","dimension"),k);C(Hj(d.vtp_metric,"index","metric"),l);var u=Ge(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+Zc(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},B=function(){
var O=function(km,Ii,lm){if(!Pa(Ii))return!1;for(var bd=Ga(Object(Ii),lm,[]),Qf=0;bd&&Qf<bd.length;Qf++)y(km,bd[Qf]);return!!bd&&0<bd.length},K;if(d.vtp_useEcommerceDataLayer){var sa=!1;sa||(K=W("ecommerce",1))}else d.vtp_ecommerceMacroData&&(K=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(K))return;K=Object(K);var Eb=Ga(g,"currencyCode",K.currencyCode);
void 0!==Eb&&y("set","&cu",Eb);O("ec:addImpression",K,"impressions");if(O("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){y("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Za="refund purchase remove checkout checkout_option add click detail".split(" "),$a=0;$a<Ba.length;$a++){var jb=K[Ba[$a]];if(jb){O("ec:addProduct",jb,"products");y("ec:setAction",Ba[$a],jb.actionField);
if(td)for(var ub=0;ub<Za.length;ub++){var tc=K[Za[ub]];if(tc){tc!==jb&&I("GTM",13);break}}break}}},A=function(O,K,sa){var Eb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var Za=w[Ba]?Ca(O[Ba]):O[Ba];"anonymizeIp"!=Ba||Za||(Za=void 0);K[Ba]=Za;Eb++}return Eb},E={name:t};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",ei(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(M,U,!1);y("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ja="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ja})}M?y("send","pageview",M):y("send","pageview");d.vtp_autoLinkDomains&&He(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);R(ab,function(){var O=Ee();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0;Z.__jel.priorityOverride=0})(function(a){if(!Xi("jel")){var b=X("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Ti({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Yi("jel")}G(a.vtp_gtmOnSuccess)})}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!t){var x=X("document");t=x.location.protocol+"//"+x.location.hostname;x.location.port&&(t+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.ad)&&(w.setAttribute("data-gtm-yt-inspected-"+y.ad,"true"),d(w,y.ae))){w.id||(w.id=a());var x=X("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var B=h(z,y),A={},E;for(E in B)A.Na=E,B.hasOwnProperty(A.Na)&&z.addEventListener(A.Na,function(J){return function(M){return B[J.Na](M.data)}}(A)),A={Na:A.Na}}}
function g(w){G(function(){function y(){for(var z=x.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var x=X("document");y();si(y)})}function h(w,y){var x,z;function B(){ha=Ni(function(){return{url:P,title:T,Xd:L,uf:w.getCurrentTime(),playbackRate:oa}},y.ad,w.getIframe());L=0;T=P="";oa=1;return A}function A(O){switch(O){case p.PLAYING:L=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();T=K?K.title:""}oa=w.getPlaybackRate();y.nf?ha.Ib("start"):ha.oc();
N=m(y.Cg,y.Bg,w.getDuration());return E(O);default:return A}}function E(){ja=w.getCurrentTime();ta=(new Date).getTime();ha.Mg();na();return J}function J(O){var K;switch(O){case p.ENDED:return U(O);case p.PAUSED:K="pause";case p.BUFFERING:var sa=w.getCurrentTime()-ja;K=1<Math.abs(((new Date).getTime()-ta)/1E3*oa-sa)?"seek":K||"buffering";w.getCurrentTime()&&(y.lf?ha.Ib(K):ha.oc());S();return M;case p.UNSTARTED:return B(O);default:return J}}function M(O){switch(O){case p.ENDED:return U(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return B(O);default:return M}}function U(){for(;z;){var O=x;Oi(z);O()}y.kf&&ha.Ib("complete",1);return B(p.UNSTARTED)}function V(){}function S(){z&&(Oi(z),z=0,x=V)}function na(){if(N.length&&0!==oa){var O=-1,K;do{K=N[0];if(K.ra>w.getDuration())return;O=(K.ra-w.getCurrentTime())/oa;if(0>O&&(N.shift(),0===N.length))return}while(0>O);x=function(){z=0;x=V;0<N.length&&N[0].ra===K.ra&&(N.shift(),ha.Ib("progress",K.je,K.ne));na()};z=Pi(x,1E3*O)}}var ha,N=[],L,P,T,oa,ja,ta,ab=B(p.UNSTARTED);
z=0;x=V;return{onStateChange:function(O){ab=ab(O)},onPlaybackRateChange:function(O){ja=w.getCurrentTime();ta=(new Date).getTime();ha.oc();oa=O;S();na()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,J){return E-J});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,J){return E-J});return z}function m(w,y,x){var z=
w.map(function(E){return{ra:E,ne:E,je:void 0}});if(!y.length)return z;var B=y.map(function(E){return{ra:E*x,ne:void 0,je:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,J){return E.ra-J.ra});return A}function n(w){w.vtp_triggerStartOption?q(w):qe(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||B.length||
A.length){var J={nf:y,kf:x,lf:z,Bg:B,Cg:A,ae:E,ad:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=X("YT"),U=function(){g(J)};G(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(U);else{var V=X("onYouTubeIframeAPIReady");Ui("onYouTubeIframeAPIReady",function(){V&&V();U()});G(function(){for(var S=X("document"),na=S.getElementsByTagName("script"),ha=na.length,N=0;N<ha;N++){var L=na[N].getAttribute("src");if(b(L,"iframe_api")||b(L,"player_api"))return}for(var P=S.getElementsByTagName("iframe"),T=P.length,
oa=0;oa<T;oa++)if(!v&&d(P[oa],J.ae)){R("https://www.youtube.com/iframe_api");v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();
Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;C(Hj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=C(e);c=C(c,g)||{}}C(Hj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Ge(c.vtp_functionName);if(qa(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Zc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,z){var B=0,A;for(A in y)if(y.hasOwnProperty(A)&&
(z&&m[A]||!z&&void 0===m[A])){var E=n[A]?Ca(y[A]):y[A];"anonymizeIp"!==A||E||(E=void 0);x[A]=E;B++}return B},u={name:l};q(d,u,!0);var p={"&gtm":ei(!0)};q(d,p,!1);var t=encodeURI(Q("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,u);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,R(t,function(){return Ee().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=X("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else G(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();

Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Ui("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Ui("_hjSettings",{hjid:b,hjsv:5});R("//static.hotjar.com/c/hotjar-"+Y(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Eh())){Sh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ja:void 0};Ph(m);Wh(["aw","dc"],m);ai(g,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Uh(a,q,u,p,n);}})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Ld(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(Qi());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Gj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Qe(Re(p),"HOST",!0)}function g(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)li(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&ic(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,jc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),B=Re(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Qe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var U=p.vtp_mdValue,V=b(t,"MD",zi);return U&&V?Ci(V,U)||
v:V||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Gb.oa]=null;c[Gb.Ee]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ze();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:ei()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?W(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var B="DATA_LAYER"==v?W(x):k[y];z(B)&&q(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,R(p,g(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.fsl=[],function(){function a(){var e=X("document"),g=c(),h=HTMLFormElement.prototype.submit;gc(e,"click",function(k){var l=k.target;if(l&&(l=lc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&ic(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=F.getElementById(l.form):m=lc(l,["form"],100);m&&g.store(m,l)}},!1);gc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,q=g.get(l),u=!0;if(d(l,function(){if(u){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,q))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return va(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=Sg("fsl",h?"nv.mwt":"mwt",0),n;n=h?Sg("fsl","nv.ids",[]):Sg("fsl","ids",[]);if(!n.length)return!0;var q=Og(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);q["gtm.elementUrl"]=u;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!Ti(q,Eg(g),m))return!1}else Ti(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,q)};Rg("fsl","mwt",m,0);h||Rg("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Rg("fsl","ids",n,[]);h||Rg("fsl","nv.ids",n,[]);Xi("fsl")||(a(),Yi("fsl"));G(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Hj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,bc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=aj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Bc,k=g.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,kc(h),k,e)()}else Pi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var e=X("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.$f||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=lc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Sg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Sg("lcl","nv.ids",[]):Sg("lcl","ids",[]);if(q.length){var u=Og(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String($i(l,"rel")||""),t=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&I("GTM",36);var v=X(($i(l,"target")||"_self").substring(1)),w=!0;if(Ti(u,Eg(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(B){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.$f=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=$i(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Ti(u,function(){},n||2E3);return!0}}};gc(e,"click",h,!1);gc(e,"auxclick",h,
!1)}function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=$i(g,"href"),l=k.indexOf("#"),m=$i(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Si(k),q=Si(h.location);return n!==q}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,
q)};Rg("lcl","mwt",m,0);h||Rg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Rg("lcl","ids",n,[]);h||Rg("lcl","nv.ids",n,[]);Xi("lcl")||(a(),Yi("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var hm={};hm.macro=function(a){if(Lg.nc.hasOwnProperty(a))return Lg.nc[a]},hm.onHtmlSuccess=Lg.Wd(!0),hm.onHtmlFailure=Lg.Wd(!1);hm.dataLayer=Ed;hm.callback=function(a){Xc.hasOwnProperty(a)&&qa(Xc[a])&&Xc[a]();delete Xc[a]};function im(){Oc[Nc.s]=hm;Ia(Yc,Z.a);xb=xb||Lg;yb=he}
function jm(){Gh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.s]){var a=Oc.zones;a&&a.unregisterChild(Nc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)sb.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(q)}vb=Z;wb=Aj;im();Kg();le=!1;me=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)oe();else{gc(F,"DOMContentLoaded",oe);gc(F,"readystatechange",oe);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&pe()}gc(D,"load",oe)}xg=!1;"complete"===F.readyState?zg():gc(D,
"load",zg);a:{if(!td)break a;D.setInterval(ud,864E5);}
Uc=(new Date).getTime();
}}jm();

})()
