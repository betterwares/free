var klevu_layout={loaderPlaced:false,renderResults:function(b,d){var g=document,f=true,a=g.getElementById("klevuSearchNoResults"),e=g.getElementById("klevuArrow"),c=g.getElementById("klevu-pt-rs-hover");this.hideLoader();if(klevu_searchedTerm.length===0){return}if(c){c.style.display="none"}if(a){a.style.display="none"}if(klevu_showAdvancedAutosuggestionLayout){this.showAdvancedAutoSuggestions(b.autoComplete,f,b.meta)}else{this.showAutoSuggestions(b.autoComplete,b.meta);this.showCmsContent(b.pages);this.showCategories(b.categories);if((b.autoComplete&&b.autoComplete.length>0)||(b.categories&&b.categories.length>0)||(b.pages&&b.pages.length>0)){f=false}this.showProducts(b.meta,b.result,f,b.popularProducts);if(!f||b.result.length>0){klevu_commons.showBannerAdForGivenTerm(klevu_searchedTerm)}else{klevu_commons.showBannerAdForGivenTerm("")}}g.getElementById("klevuSearchingArea").style.cssText+=";display : block !important;";if(e){e.style.display="none"}},showAutoSuggestions:function(q,r){var p=document,a=p.getElementById("klevuAutoCompleteArea"),c="",h=0,d="",l,g=0,n=0,o=7,f="",m=new Array(),e=0,b="";if("undefined"!==typeof klevu_maxSuggestionsToShow&&klevu_maxSuggestionsToShow){o=klevu_maxSuggestionsToShow}if("undefined"!==typeof klevu_storeLandingPageUrl){f=klevu_storeLandingPageUrl}if("undefined"!==typeof klevu_searchQueryParam&&klevu_searchQueryParam){f=klevu_commons.updateUrlParameter(f,klevu_searchQueryParam,"")}else{f=klevu_commons.updateUrlParameter(f,"q","")}if(q&&q.length>0){c+='<div class="klevuSuggestionHeading"><span class="klevuHeadingText">'+klevu_uiLabels.suggestionsHeading+'</span><span class="klevuLoader" id="klevu-loader-2"></span></div>';klevu_layout.loaderPlaced=true;c+='<ul id="klevu_acList">';for(h=0;h<q.length;h++){d="";l="";if(q[h].indexOf(":")!==-1){l=q[h].split(":");d=l[0]}else{d=q[h]}if(m.indexOf(d)!==-1){continue}b=d.replace(/<b>/g,"").replace(/<\/b>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"");d=d.replace(/<b>/g,'<strong class="klevu-highlightTerm" style="color:inherit;">').replace(/<\/b>/g,"</strong>");c+="<li>";c+='<a href="'+f+encodeURIComponent(b)+'" target="_self" ';if(klevu_commons.isMobileDevice()){c+="onclick=\"klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(b)+"', "+r.totalResultsFound+", '"+r.typeOfQuery+"', '"+f+encodeURIComponent(b)+"', event );\">"}else{c+="onmousedown=\"klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(b)+"', "+r.totalResultsFound+", '"+r.typeOfQuery+"', '"+f+encodeURIComponent(b)+"', event );\"  onkeydown=\"klevu_eventHandler.handleElementKeydownEvent(event, null ,  function(p){klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(b)+"', "+r.totalResultsFound+", '"+r.typeOfQuery+"', '"+f+encodeURIComponent(b)+'\', event );});"  onclick="klevu_analytics.stopClickDefault( event );">'}c+=d+"</a></li>";m[e]=d;n++;e++;if(n>=o){break}}c+="</ul>";a.innerHTML=c;a.style.display="block"}else{a.style.display="none";klevu_layout.loaderPlaced=false;c="";a.innerHTML=c}},showAdvancedAutoSuggestions:function(b,v,n){var y=document,r=y.getElementById("klevuAutoCompleteArea"),a=y.getElementById("klevuCategoryArea"),h="",c="",w=0,f="",o="",u=0,q=0,e=10,d="",s=new Array(),t=0,l=new Array(),p=new Array(),x,m="",g="";if("undefined"!==typeof klevu_storeLandingPageUrl){d=klevu_storeLandingPageUrl}if("undefined"!==typeof klevu_searchQueryParam&&klevu_searchQueryParam){d=klevu_commons.updateUrlParameter(d,klevu_searchQueryParam,"")}else{d=klevu_commons.updateUrlParameter(d,"q","")}if(b&&b.length>0){for(w=0;w<b.length;w++){if(b[w].indexOf(":")!==-1){l.push(b[w])}else{p.push(b[w])}}h+='<span class="klevuLoader" id="klevu-loader-2"></span></div>';c+='<span class="klevuLoader" id="klevu-loader-2"></span></div>';h+='<ul id="klevu_acList">';c+='<ul id="klevu_acList">';for(w=0;w<l.length;w++){x=l[w].split(":");term=x[0];for(u=1;u<x.length;u++){o=x[u].replace("br_","");if(x[u].indexOf("br_")===0){f="brand:"+o}else{if(x[u].indexOf("_all")===-1){f="category:"+o}else{f=""}}o=o.indexOf("_all")===0?klevu_uiLabels.inAllCategories:klevu_uiLabels.inCategory.replace("#","<span>"+o+"</span>");m=f.length>0?"&"+klevu_productFilterParam+"="+encodeURIComponent(f):"";if(s.indexOf(term+" "+o)!==-1){continue}g=term.replace(/<b>/g,"").replace(/<\/b>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"");term=term.replace(/<b>/g,'<strong class="klevu-highlightTerm" style="color:inherit;">').replace(/<\/b>/g,"</strong>");h+="<li>";h+='<a href="'+d+encodeURIComponent(g)+m+'" target="_self" ';if(klevu_commons.isMobileDevice()){h+="onclick=\"klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(g)+"', "+n.totalResultsFound+", '"+n.typeOfQuery+"', '"+d+encodeURIComponent(g)+"&"+klevu_productFilterParam+"="+encodeURIComponent(f)+"', event, '"+encodeURIComponent(x[u])+"' );\">"}else{h+="onmousedown=\"klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(g)+"', "+n.totalResultsFound+", '"+n.typeOfQuery+"', '"+d+encodeURIComponent(g)+"&"+klevu_productFilterParam+"="+encodeURIComponent(f)+"', event, '"+encodeURIComponent(x[u])+"' );\"  onkeydown=\"klevu_eventHandler.handleElementKeydownEvent(event, null ,  function(p){klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(g)+"', "+n.totalResultsFound+", '"+n.typeOfQuery+"', '"+d+encodeURIComponent(g)+"&"+klevu_productFilterParam+"="+encodeURIComponent(f)+"', event, '"+encodeURIComponent(x[u])+'\' );});"  onclick="klevu_analytics.stopClickDefault( event );">'}h+=term+" "+o+"</a></li>";s[t]=term+" "+o}}for(w=0;w<p.length;w++){term=p[w];if(s.indexOf(term)!==-1){continue}g=term.replace(/<b>/g,"").replace(/<\/b>/g,"").replace(/<strong>/g,"").replace(/<\/strong>/g,"");term=term.replace(/<b>/g,'<strong class="klevu-highlightTerm" style="color:inherit;">').replace(/<\/b>/g,"</strong>");c+="<li>";c+='<a href="'+d+encodeURIComponent(g)+'" target="_self" ';if(klevu_commons.isMobileDevice()){c+="onclick=\"klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(g)+"', "+n.totalResultsFound+", '"+n.typeOfQuery+"', '"+d+encodeURIComponent(g)+"', event );\">"}else{c+="onmousedown=\"klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(g)+"', "+n.totalResultsFound+", '"+n.typeOfQuery+"', '"+d+encodeURIComponent(g)+"', event );\"  onkeydown=\"klevu_eventHandler.handleElementKeydownEvent(event, null ,  function(p){klevu_analytics.trackClickedAutocomplete( '"+encodeURIComponent(g)+"', "+n.totalResultsFound+", '"+n.typeOfQuery+"', '"+d+encodeURIComponent(g)+'\', event );});"  onclick="klevu_analytics.stopClickDefault( event );">'}c+=term+"</a></li>";s[t]=term}h+="</ul>";c+="</ul>";r.innerHTML=h;a.innerHTML=c;r.style.display=l.length==0?"none":"block";a.style.display=p.length==0?"none":"block"}else{if(v){r.innerHTML='<div class="klevuNoResults" style="display:block;">'+klevu_uiLabels.noRecords+"</div>";r.style.display="block"}a.style.display="none";klevu_layout.loaderPlaced=false}},showCmsContent:function(f){var d=document,e=d.getElementById("klevuCmsContentArea"),a=3,c="",b=0;if("undefined"!==typeof klevu_maxPagesToShow&&klevu_maxPagesToShow){a=klevu_maxPagesToShow}if(f&&f.length>0){c='<div class="klevuSuggestionHeading"><span class="klevuHeadingText">'+klevu_uiLabels.pagesHeading+"</span>";if(!klevu_layout.loaderPlaced){c+='<span class="klevuLoader" id="klevu-loader-2"></span>';klevu_layout.loaderPlaced=true}c+="</div>";c+="<ul>";for(b=0;b<f.length&&b<a;b++){c+='<li><a href="'+f[b].url+'" target="_self">'+f[b].name+"</a></li>"}c+="</ul>";e.innerHTML=c;e.style.display="block"}else{e.style.display="none"}},showCategories:function(b){var g=document,a="",d=0,c=3,f="",e=g.getElementById("klevuCategoryArea");if("undefined"!==typeof klevu_maxCategoriesToShow&&klevu_maxCategoriesToShow){c=klevu_maxCategoriesToShow}if(b&&b.length>0){a=klevu_uiLabels.filter_category.toLowerCase();f='<div class="klevuSuggestionHeading"><span class="klevuHeadingText">'+a.replace(a[0],a[0].toUpperCase())+"</span>";if(!klevu_layout.loaderPlaced){f+='<span class="klevuLoader" id="klevu-loader-2"></span>';klevu_layout.loaderPlaced=true}f+="</div>";f+="<ul>";for(d=0;d<b.length&&d<c;d++){if(klevu_apiKey==="klevu-14491345658472072"){b[d].url=b[d].url.replace("zadmin.zimmermannwear.com","www.zimmermannwear.com")}f+='<li><a href="'+b[d].url+'" target="_self">'+b[d].name+"</a></li>"}f+="</ul>";e.innerHTML=f;e.style.display="block"}else{e.style.display="none"}},showProducts:function(t,s,n,K){var f=document,v=0,B="",g=klevu_userOptions.recordsPerPage,L=0,r=33,E=f.getElementById("productsList"),M="",Q="",d,H,D="",j="",A="",F="",b="",m="",N="",x="",o="",I="",C="",J="",a="",c="",h="",p="",O="",u="",k=f.getElementById("klevuProductHeading"),G="",q="",z,P,y=0,e=f.createElement("div"),l=klevu_commons.getRedirectUrlForSearchedTerm(klevu_searchedTerm);if("undefined"!==typeof klevu_storeLandingPageUrl){G=klevu_storeLandingPageUrl}if("undefined"!==typeof klevu_searchQueryParam&&klevu_searchQueryParam){G=klevu_commons.updateUrlParameter(G,klevu_searchQueryParam,"")}else{G=klevu_commons.updateUrlParameter(G,"q","")}if(l!==null){G=l}else{G+=encodeURIComponent(klevu_searchedTerm)}if(s.length>0){if(t.totalResultsFound){v=Number(t.totalResultsFound)}k.innerHTML='<span class="klevuHeadingText">'+klevu_uiLabels.matchingProducts.replace("#",klevu_searchedTerm)+"</span>";q='<a href="'+G+'" target="_parent">'+klevu_uiLabels.viewAllProducts.replace("#",v)+"</a>";if(!klevu_layout.loaderPlaced){k.innerHTML+='<span class="klevuLoader" id="klevu-loader-2">'+q+"</span>"}else{k.innerHTML+=q}k.style.display="block";B="<ul>";for(L=0;L<s.length&&L<g;L++){j=s[L].name||"";A=s[L].shortDescription||s[L].shortDesc||s[L].desc||s[L].metaDesc||"";D=A;F=s[L].brand||"";b=s[L].id||"";m=s[L].salePrice||"";x=s[L].price||"";o=s[L].imageUrl||s[L].image||"";I=s[L].currency||"";J=s[L].displayPrice||"";a=s[L].totalVariants||"";c=s[L].url||"";p=s[L].startPrice||"";O=s[L].toPrice||"";u=s[L].sku||"";N=s[L].groupPrices||"";C=s[L].rating||"";h=s[L].discount||"";z=null;P=null;y=1+L;e.innerHTML=D;D=e.textContent||e.innerText||"";if(D.length>r){D=D.replace(/^(.{33}[^\s]*).*/,"$1")+" ..."}d=D.lastIndexOf("<b");H=D.lastIndexOf("</b>");if(d>H){D=D.substring(0,d-1)}z={productCode:b,productImage:o,productBrand:F,productUrl:c,productName:j,productDescription:D,productPrice:x,salePrice:m,currency:I,priceToDisplay:J,startPrice:p,toPrice:O,totalProductVariants:a,productSku:u,groupPrices:N,rating:C,discount:h,productPosition:y};for(P in s[L]){if(s[L].hasOwnProperty(P)){z[P]=s[L][P]}}B+=klevu_layout.displayProductdata(z);e.innerHTML=""}B+="</ul>";E.innerHTML=B}else{k.style.display="none";E.innerHTML="";if(n){var w=f.getElementById("klevuSearchNoResults");w.innerHTML=klevu_layout.displayNoResultData(klevu_commons.getNoResultsData(klevu_uiLabels.noRecords,K));w.style.display="block"}}E.style.display="block"},displayProductdata:function(e){var d="",f="",b,a=document.createElement("div"),c=e.additionalDataToReturn?JSON.parse(e.additionalDataToReturn):false;e=klevu_productCustomizations(e);e.additionalFlags=c;if(e.productImage.trim().length===0){e.productImage=klevu_userOptions.noImageUrl}if(klevu_userOptions.openProductClicksInNewWindow){additionalParams=' target="_blank"'}else{additionalParams=' onclick="klevu_analytics.stopClickDefault( event );" target="_self"'}f="{data: {code: '"+escape(e.productCode)+"',url: '"+escape(e.productUrl)+"',name: '"+escape(e.productName)+"',salePrice: '"+escape(e.salePrice)+"',rating: '"+escape(e.rating)+"',position: "+e.productPosition+",category: '"+escape(e.category)+"',sku: '"+escape(e.sku)+"'}}";a.innerHTML=e.productName;b=a.textContent||a.innerText||"";d+="<li>";d+='<a href="'+e.productUrl.replace(/"/g,"%22")+'" class="klevu-result-box-l2" ';if(klevu_commons.isMobileDevice()){d+=' onclick="return  klevu_analytics.trackClickedProduct(event, '+f+');" target="_self" >'}else{d+=' onmousedown="return  klevu_analytics.trackClickedProduct(event, '+f+');"  onkeydown="return klevu_eventHandler.handleElementKeydownEvent(event, '+f+', klevu_analytics.trackClickedProduct);" '+additionalParams+" >"}d+='<div class="klevu-img-wrap-l2"><img src="'+e.productImage+'" onerror="this.onerror=null;this.src=\''+klevu_userOptions.noImageUrl+'\';" alt="'+klevu_commons.escapeHtml(b)+'" /></div>';if("undefined"!==typeof klevu_showDiscountBadge&&klevu_showDiscountBadge&&e.discount!=""&&e.discount!="0"&&e.discount!="0.0"){if(klevu_uiLabels.discountBadgeText.indexOf("#")===-1){d+='<div class="klevu-discount-badge-l2">'+klevu_uiLabels.discountBadgeText+" "+Number(e.discount).toFixed(0)+"%</div>"}else{d+='<div class="klevu-discount-badge-l2">'+klevu_uiLabels.discountBadgeText.replace("#",Number(e.discount).toFixed(0)+"%")+"</div>"}}d+='<div class="klevu-name-desc-l2">';d+='<div class="klevu-name-l2">'+e.productName+'</div><div class="klevu-desc-l2">'+e.productDescription+"</div>";if(klevu_showPrices){d+='<div class="klevu-price-l2">';d+=klevu_productElements.showPrices(e);if(klevu_userOptions.vatCaption.trim().length>0){d+='<span class="klevu-vat-caption-l2">('+klevu_userOptions.vatCaption+")</span>"}d+="</div>"}d+=klevu_productElements.showRating(e);if(klevu_userOptions.outOfStockCaption.trim().length>0){if(e.inStock&&e.inStock==="no"){d+='<div class="klevu-out-of-stock-l2">'+klevu_userOptions.outOfStockCaption+"</div>"}}d+='</div><div class="klevu-clear-left"></div></a></li>';return d},sendProductToCart:function(a,c){var b=1;if(arguments.length>2){if(document.getElementById(arguments[2])){b=Number(document.getElementById(arguments[2]).value);if(b<=0){b=1}}}klevu_addtocart(a,c,b)},getPriceDivs:function(a,c,d,b){if(a==="ORIG"){return'<span class="klevu-origprice-l2"><span class="klevuPriceGreyText-l2"></span>'+c+"</span>&nbsp;"}if(a==="SALE"){b=b||"klevu-saleprice-l2";return'<span class="'+b+'"><span class="klevuPriceGreyText-l2">'+d+"</span> "+c+" </span>"}},showLoader:function(b){var c=document,a=c.getElementById("klevu-pt-rs-hover");if(c.getElementById("klevu-loader-2")&&(c.getElementById("klevuAutoCompleteArea").style.display!=="none"||c.getElementById("productsList").style.display!=="none")){}else{c.getElementById("loaderContainer").style.display="block";c.getElementById("klevuLoader").style.display="block"}if(a){a.style.display="none"}},hideLoader:function(){document.getElementById("klevuLoader").style.display="none";document.getElementById("loaderContainer").style.display="none"},clearResults:function(c){var m=document,b=m.getElementById("klevuSearchingArea"),l=m.getElementById("klevuCmsContentArea"),f=m.getElementById("klevuCategoryArea"),h=m.getElementById("klevuProductHeading"),j=m.getElementById("productsList"),g=m.getElementById("klevuAutoCompleteArea"),e=m.getElementById("klevu-pt-rs-hover"),n=m.getElementById("klevuArrow"),a=klevu_activeSearchBox,k=arguments[1],o=false,d=m.getElementById("klevuSearchNoResults");if((a&&a.value.trim().length<klevu_userOptions.minimumLetters)||k){if(klevu_activeSearchBox!==document.activeElement){if(b){if(b.style.display.indexOf("block")!==-1){o=true}b.style.cssText+=";display : none !important;"}if(l){if(l.style.display.indexOf("block")!==-1){o=true}l.style.display="none"}if(f){if(f.style.display.indexOf("block")!==-1){o=true}f.style.display="none"}if(h){if(h.style.display.indexOf("block")!==-1){o=true}h.style.display="none"}if(j){if(j.style.display.indexOf("block")!==-1){o=true}j.style.display="none"}if(g){if(g.style.display.indexOf("block")!==-1){o=true}g.style.display="none"}if(e){if(e.style.display.indexOf("block")!==-1){o=true}e.style.display="none"}if(d){if(d.style.display.indexOf("block")!==-1){o=true}d.style.display="none"}if(n){if(n.style.display.indexOf("block")!==-1){o=true}n.style.cssText+=";display : none !important;"}}if(o){if(c){c.preventDefault()}}}},handleTabKeyOnSearchBox:function(c){var d=document,e=d.getElementById("klevuSearchingArea"),b=d.getElementById("klevu-pt-rs-hover"),a=false;if(e){if(e.style.display.indexOf("block")!==-1){a=true;e.focus()}}if(b){if(b.style.display.indexOf("block")!==-1){a=true;b.focus()}}if(a){if(c){c.preventDefault()}return false}else{return true}},positionOnScroll:function(){var a=document.getElementById("klevuSearchingArea").style;if(a&&a.display.indexOf("block")!==-1){klevu_layout.positionLayout(klevu_activeSearchBox)}},isClickAllowedOnGivenElement:function(b){var a,c;if(b.id){a=String(b.id);if(a==="klevuSearchingArea"){return true}if(a==="klevu-pt-hover-box"){return true}if(a==="klevu-ps-right-box"){return true}}},getSearchBoxPosition:function(n){var l=0,j=0,h=n,a,d,m=document,f=m.body,e=false,c=0,g=window;while(h&&h.tagName.toLowerCase()!=="body"){if(!g.getComputedStyle){g.getComputedStyle=function(p,o){this.searchBox=p;this.getPropertyValue=function(r){var q=/(\-([a-z]){1})/g;if(r==="float"){r="styleFloat"}if(q.test(r)){r=r.replace(q,function(){return arguments[2].toUpperCase()})}return p.currentStyle[r]?p.currentStyle[r]:null};return this}}a=g.getComputedStyle(h,null);if(a){d=a.getPropertyValue("position");if(d==="fixed"){e=true;break}else{h=h.parentNode}}else{h=h.parentNode}}var k=1,b=(g.pageYOffset!==undefined)?g.pageYOffset:(m.documentElement||f.parentNode||f).scrollTop;while(n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop)){l+=n.offsetLeft-n.scrollLeft;if(e&&k===1){j+=n.offsetTop+b;k=0}else{j+=n.offsetTop}n=n.offsetParent}return{top:j,left:l}},getScreenWidth:function(){var f=document,c=f.body,a=f.documentElement,e=window,d,b;if(typeof(c.clientWidth)=="number"){d=c.clientWidth}else{if(typeof e.innerWidth!=="undefined"){d=e.innerWidth}else{if(typeof a!="undefined"&&typeof a.clientWidth!="undefined"&&a.clientWidth!=0){d=a.clientWidth}else{d=f.getElementsByTagName("body")[0].clientWidth}}}return d},positionLayout:function(r){var t=document,c=t.getElementById("klevuSearchingArea"),m=t.getElementById("klevuArrow"),l=t.getElementById("klevu-pt-rs-hover"),e=t.getElementById("loaderContainer"),p=klevu_result_left_margin.trim(),b=klevu_result_top_margin.trim(),j,h,g;if(p!==""&&b!==""){j=b+"px";g=p+"px";h="auto"}else{var s,a,k,f,q,o,n,d;s=this.getSearchBoxPosition(r);k=s.top;a=s.left;f=r.offsetWidth;q=r.offsetHeight;o=this.getScreenWidth();d=o/2;j=q+k+"px";if(a>=d){h=o-(a+f)+"px";g="auto"}else{h="auto";g=a+"px"}}c.style.right=h;c.style.top=j;c.style.left=g;e.style.right=h;e.style.top=j;e.style.left=g;if(l){l.style.right=h;l.style.left=g;l.style.top=j}},handleInsufficientSearchTermLength:function(){var c=document,a=c.getElementById("klevuSearchingArea"),b=c.getElementById("klevu-pt-rs-hover");klevu_lastSearchedTerm="";if(klevu_searchedTerm.trim().length<klevu_userOptions.minimumLetters){a.style.cssText+=";display : none !important;";if(b){if(klevu_userOptions.showRecentlyViewedItems||klevu_userOptions.showTrendingProducts){if(!c.getElementById("klevu-ps-left-box")&&!c.getElementById("klevu-ps-right-box")){klevu_commons.loadPersonalizedSearchElements(klevu_activeSearchBox)}else{if(b.innerHTML!==""){b.style.display="block"}}}else{if(b.innerHTML!==""){b.style.display="block"}}}}return false},showPopularAndRecentSearches:function(g){var f=document,h=f.getElementById("klevuSearchingArea"),c=f.getElementById("klevu-pt-rs-hover"),e=f.getElementById("klevu-pt-hover-box"),a=f.getElementById("klevu-rs-hover-box"),b,d;if(g.value.trim()!==""&&!klevu_commons.isTermPlaceholder(g.value.trim(),"ptrs")&&g.value.trim().length>=klevu_userOptions.minimumLetters&&h.style&&h.style.display==="none"){klevu_search.handleSearchQuery(g.value)}else{if(c){if(h.style&&h.style.display==="block"){c.style.display="none"}else{b=(e&&e.innerHTML.trim()!==""),d=(a&&a.innerHTML.trim()!=="");if(b||d){c.style.display="block"}else{c.style.display="none"}}}}},displayNoResultData:function(m){if(!m.msgToShow){m=klevu_commons.getNoResultsData(klevu_uiLabels.noRecords,m)}var n="",l=33,k=m.products||[],j=klevu_userOptions.noResultsOptions,c=false,d,a=document.createElement("div");n+='<div class="klevuSearchNoResults-Inner">';n+='<div class="klevuNoResults-message" aria-live="assertive" role="status" tabindex="0">'+m.msgToShow+"</div>";if(k&&k.length>0){n+='<div class="klevuSearchNoResultsBlock">';n+='<div class="klevuSearchNoResults-l2">';n+='<div class="klevuSearchNoResultsHeading">'+m.headingForNoResultProducts+"</div>";n+="<ul>";for(var f=0;f<k.length;f++){n+="<li>";n+='<a href="'+k[f].url+'" class="klevu-noResultsBox-l2"';if(klevu_commons.isMobileDevice()){n+=' onclick="return  klevu_analytics.trackClickedProduct(event, '+m.trackingParams[f]+');" target="_self" >'}else{n+=' onmousedown="return  klevu_analytics.trackClickedProduct(event, '+m.trackingParams[f]+');"  onkeydown="return klevu_eventHandler.handleElementKeydownEvent(event, '+m.trackingParams[f]+', klevu_analytics.trackClickedProduct);" '+m.additionalParams+" >"}if(("undefined"===typeof klevu_truncateDescription||("undefined"!==typeof klevu_truncateDescription&&klevu_truncateDescription))&&k[f].desc.length>l){k[f].desc=k[f].desc.replace(/^(.{33}[^\s]*).*/,"$1")+" ..."}a.innerHTML=k[f].name;d=a.textContent||a.innerText||"";n+='<div class="klevu-img-wrap-l2">';n+='<img src="'+k[f].imageUrl+'" onerror="this.onerror=null;this.src=\''+klevu_userOptions.noImageUrl+'\';" alt="'+klevu_commons.escapeHtml(d)+'" /></div>';n+='<div class="klevu-name-desc-l2">';n+='<div class="klevu-name-l2">'+k[f].name+"</div>";n+='<div class="klevu-desc-l2">'+k[f].desc+"</div>";if(klevu_showPrices){n+='<div class="klevu-price-l2">';if(klevu_userOptions.showOnlyOriginalAndSalePrices){n+=klevu_commons.showOriginalAndSalePrices("SLIM",k[f],"klevu-saleprice-l2","klevu-saleprice-l2 klevu-special-price-l2")}else{n+=klevu_commons.showProductPrices("SLIM",k[f],"klevu-saleprice-l2","klevu-saleprice-l2 klevu-special-price-l2")}n+="</div>"}n+="</div>";n+='<div class="klevu-clear-left"></div>';n+="</a>";n+="</li>"}n+="</ul>";n+="</div>";n+="</div>"}if(m.banner&&m.banner.showOnQuickSearch){trackingParams="{id: '"+m.banner.bannerRef+"',name: '"+m.banner.bannerName+"',image: '"+escape(m.banner.bannerImageUrl)+"',redirectUrl: '"+m.banner.redirectUrl+"'}";if(klevu_commons.isMobileDevice()){trackingEvent=" onclick="}else{trackingEvent=' onclick="klevu_analytics.stopClickDefault( event );"  onkeydown="return klevu_eventHandler.handleElementKeydownEvent(event, '+trackingParams+', klevu_analytics.trackClickedBannerAds);"  onmousedown='}trackingEvent+='"return klevu_analytics.trackClickedBannerAds(event, '+trackingParams+');" target="_blank">';n+='<div class="kuNoResults-banner"><a href="'+m.banner.redirectUrl+'" '+trackingEvent+'<img src="'+m.banner.bannerImageUrl+'" alt="'+m.banner.bannerName+'"/></a></div>'}if((j&&j.showPopularKeywords)||(klevu_userOptions.showPopularKeywordsForNoResult)){c=true}if("undefined"!==typeof klevu_webstorePopularTerms&&klevu_webstorePopularTerms&&c){var b=klevu_webstorePopularTerms,g=1;n+='<div class="klevuNoResults-pSearch">';n+='<strong class="klevuNoResults-pSearchTitle">'+klevu_uiLabels.popularSearches+" </strong>";if(b&&b.length>0){for(f=0;f<b.length;f++){if(f!==0){n+=", "}try{n+='<a href="'+m.landingPageUrl+encodeURIComponent(decodeURIComponent(b[f]))+'" target="_self">'+decodeURIComponent(b[f])+"</a>"}catch(h){continue}if(g==5){break}g++}}n+="</div><!-- ends klevuNoResults-popularSearch-->"}n+="</div><!-- ends klevuNoResults-Inner-->";return n},handleArrowKeyNavigation:function(b){if("undefined"!==typeof klevu_uc&&"undefined"!==typeof klevu_uc.handleArrowKeyNavigation){klevu_uc.handleArrowKeyNavigation(b);return}var c=[],e=[],f=[],a=[],d=[],h=document,g=-1,k=0,j;b=b||window.event;j=b.which||b.keyCode;if(j!==38&&j!==40){return}if(h.getElementById("klevuSearchingArea").style.display=="none"){return}if(h.getElementById("klevuAutoCompleteArea").style.display!="none"){c=Array.prototype.slice.call(h.getElementById("klevuAutoCompleteArea").getElementsByTagName("li"),0)}if(h.getElementById("klevuCmsContentArea").style.display!="none"){e=Array.prototype.slice.call(h.getElementById("klevuCmsContentArea").getElementsByTagName("li"),0)}if(h.getElementById("klevuCategoryArea").style.display!="none"){f=Array.prototype.slice.call(h.getElementById("klevuCategoryArea").getElementsByTagName("li"),0)}if(h.getElementById("productsList").style.display!="none"){a=Array.prototype.slice.call(h.getElementById("productsList").getElementsByTagName("li"),0)}d=Array.prototype.concat.call(c,e,f,a);if(!d||d.length===0){return}k=d.length;for(i=0;i<d.length;i++){if(d[i].className.indexOf("klevu-hovered")!==-1){g=i;break}}switch(j){case 38:if(g==0){d[g].className="";if("undefined"!==typeof klevu_activeSearchBox&&klevu_activeSearchBox){klevu_activeSearchBox.focus();break}}if(g>0){d[g].className="";g--;while(d[g].className.indexOf("klevu-ac-inCat")!==-1){g--}d[g].className="klevu-hovered";if(d[g].childNodes.length>0){d[g].childNodes[0].focus()}}break;case 40:if(g!==-1){d[g].className=""}g++;if(g==k){if("undefined"!==typeof klevu_activeSearchBox&&klevu_activeSearchBox){klevu_activeSearchBox.focus();break}}while(d[g].className.indexOf("klevu-ac-inCat")!==-1){g++;if(g==k){g=0}}d[g].className="klevu-hovered";if(d[g].childNodes.length>0){d[g].childNodes[0].focus()}break;default:if(g!==-1){d[g].className=""}return}b.preventDefault()}};var klevu_productElements={showPrices:function(b){var c="",a=b.additionalFlags;if(a&&a.is_price_hidden){c+=a.price_hidden_label?a.price_hidden_label:""}else{if(klevu_userOptions.showOnlyOriginalAndSalePrices){c+=klevu_commons.showOriginalAndSalePrices("SLIM",b,"klevu-saleprice-l2","klevu-saleprice-l2 klevu-special-price-l2")}else{c+=klevu_commons.showProductPrices("SLIM",b,"klevu-saleprice-l2","klevu-saleprice-l2 klevu-special-price-l2")}}return c},showRating:function(c){var d="",b=c.additionalFlags,a=0;if(c.rating.trim().length>0&&!isNaN(Number(c.rating))&&Number(c.rating)<=5&&Number(c.rating)>=0){a=20*Number(c.rating);d+='<div><div class="klevu-stars-small-l2"><div class="klevu-rating-l2" style="width:'+a+'%;"></div></div>';if(b&&b.rating_count){d+="&nbsp;<span>("+b.rating_count+")</span>"}d+="</div>"}return d}};var klevu_layoutSetup={addLayoutToPage:function(o){var h,g,p,m,c,n,j,k,b,e,l,d,a;if(klevu_fluidLayoutEnabled){j=this.addElementToParent(o,"div",{"class":"klevu-fluid"});if("undefined"!==typeof klevu_bigCommerceStore&&klevu_bigCommerceStore){j.setAttribute("data-prevent-quick-search-close","")}}else{j=o}loaderContainerDiv=this.addElementToParent(j,"div",{"class":"klevu-searching-area-l2",id:"loaderContainer",style:"display:none;"});this.addLoaderDiv(loaderContainerDiv);this.addElementToParent(j,"div",{"class":"klevu-arrow",id:"klevuArrow",style:"display:none;"});h=this.addElementToParent(j,"div",{"class":"klevu-searching-area-l2",id:"klevuSearchingArea",style:"display:none;",tabindex:"-1"});if(klevu_showPopularSearches||klevu_showRecentSerches||klevu_userOptions.showRecentlyViewedItems||klevu_userOptions.showTrendingProducts){k=document.createElement("div");k.setAttribute("class","klevu-pt-rs-hover");k.setAttribute("id","klevu-pt-rs-hover");k.setAttribute("tabindex","-1");k.style.display="none";if(klevu_fluidLayoutEnabled){b=document.createElement("div");b.setAttribute("class","klevu-fluid");b.appendChild(k);o.appendChild(b)}else{o.appendChild(k)}var f=false;if(klevu_showPopularSearches){f=this.addPopularSearchesDiv(k)}if(klevu_showRecentSerches){f=this.addRecentSearchesDiv(k)}if(!f){k.style.display="none"}}this.addElementToParent(h,"div",{"class":"klevuNoResults klevuNoResults-new",id:"klevuSearchNoResults",style:"display:none;"});if("undefined"!==typeof klevu_showBannerAds&&klevu_showBannerAds){this.addElementToParent(h,"div",{"class":"klevu-banner-ad",id:"klevuBannerAdTop",style:"padding:0px;"})}e=this.addElementToParent(h,"div",{"class":"klevuSuggestionsBlock",id:"klevuSuggestionsBlock"});this.addElementToParent(e,"div",{"class":"klevuAutoSuggestion-l2",id:"klevuAutoCompleteArea",style:"display:none;"});g=this.addElementToParent(e,"div",{"class":"klevuAutoSuggestion-l2",id:"klevuCmsContentArea",style:"display:none;"});p=this.addElementToParent(e,"div",{"class":"klevuSuggestionHeading",style:"display:none;"});p.innerHTML='<span class="klevuHeadingText">Pages</span>';m=this.addElementToParent(e,"div",{"class":"klevuAutoSuggestion-l2",id:"klevuCategoryArea",style:"display:none;"});l=this.addElementToParent(h,"div",{"class":"klevuResultsBlock",id:"klevuResultsBlock"});c=this.addElementToParent(l,"div",{"class":"klevuSuggestionHeading",id:"klevuProductHeading",style:"display:none;"});n=this.addElementToParent(l,"div",{"class":"klevuSearchResults-l2",id:"productsList",style:"display:none;"});if("undefined"!==typeof klevu_showBannerAds&&klevu_showBannerAds){this.addElementToParent(h,"div",{"class":"klevu-banner-ad",id:"klevuBannerAdBottom",style:"padding:0px;"})}if(!klevu_logoFreeSearch){this.addPoweredByDiv(h)}if(klevu_fluidLayoutEnabled){a=j;d=b}else{a=h;d=k}this.addElementToParent(a,"div",{onkeydown:"klevu_commons.setupNextTabForLastChild();",tabindex:"0"});if(klevu_showPopularSearches||klevu_showRecentSerches||klevu_userOptions.showRecentlyViewedItems||klevu_userOptions.showTrendingProducts){this.addElementToParent(d,"div",{onkeydown:"klevu_commons.setupNextTabForLastChild();",tabindex:"0"})}},addPopularSearchesDiv:function(m){if("undefined"!==typeof klevu_webstorePopularTerms){var l=document,g=this.addElementToParent(m,"div",{"class":"klevu-pt-hover-box",id:"klevu-pt-hover-box"}),b="",h=0,d=klevu_webstorePopularTerms,j=1,c=document.getElementById("klevu-rs-hover-box"),f="",a="";if("undefined"!==typeof klevu_storeLandingPageUrl){f=klevu_storeLandingPageUrl}if("undefined"!==typeof klevu_searchQueryParam&&klevu_searchQueryParam){f=klevu_commons.updateUrlParameter(f,klevu_searchQueryParam,"")}else{f=klevu_commons.updateUrlParameter(f,"q","")}if(d&&d.length>0){b+="<strong>"+klevu_uiLabels.popularSearches.replace(":","")+"</strong> ";b+='<div class="klevu-pt-rs-keywords">';for(h=0;h<d.length;h++){try{if(klevu_userOptions.rsPsClickBehaviour==="search"){b+="<a href=\"javascript:klevu_search.getResultsForClickedTerm( '"+klevu_commons.escapeHtml(decodeURIComponent(d[h]))+"', 'ps' );\" target=\"_self\">"+decodeURIComponent(d[h])+"</a>"}else{a=klevu_commons.getRedirectUrlForSearchedTerm(decodeURIComponent(d[h]));if(a===null||!a){a=f+encodeURIComponent(decodeURIComponent(d[h]))}b+='<a href="'+a+'" target="_self">'+decodeURIComponent(d[h])+"</a>"}}catch(k){continue}if(j==5){break}j++}b+='</div><div class="klevu-clear-both"></div>';g.innerHTML=b;g.style.display="block";return true}else{if(!c||c.innerHTML.trim()==""){g.parentNode.removeChild(g)}return false}}},addRecentSearchesDiv:function(e){var g=klevu_commons.readCookie(klevu_RSCookieName),d,b="",a="",f="";if("undefined"!==typeof klevu_storeLandingPageUrl){a=klevu_storeLandingPageUrl}if("undefined"!==typeof klevu_searchQueryParam&&klevu_searchQueryParam){a=klevu_commons.updateUrlParameter(a,klevu_searchQueryParam,"")}else{a=klevu_commons.updateUrlParameter(a,"q","")}if(g&&g.trim()!=""){g=g.split("#-#");b="<strong>"+klevu_uiLabels.recentSearch.replace(":","")+"</strong>";b+='<div class="klevu-pt-rs-keywords">';if(g[0].indexOf("javascript:")!==-1){g=g.join(", ");b+=g}else{for(var c=0;c<g.length;c++){if(klevu_userOptions.rsPsClickBehaviour==="search"){b+="<a href=\"javascript:klevu_search.getResultsForClickedTerm( '"+g[c]+"', 'rs' );\" target=\"_self\">"+g[c]+"</a>"}else{f=klevu_commons.getRedirectUrlForSearchedTerm(g[c]);if(f===null||!f){f=a+encodeURIComponent(g[c])}b+='<a href="'+f+'" target="_self">'+g[c]+"</a>"}}}b+='</div><div class="klevu-clear-both"></div>';d=this.addElementToParent(e,"div",{"class":"klevu-rs-hover-box",id:"klevu-rs-hover-box"}),d.innerHTML=b;return true}else{return false}},addElementToParent:function(d,c,a){var b=document.createElement(c);for(var e in a){if(a.hasOwnProperty(e)){b.setAttribute(e,a[e])}}d.appendChild(b);return b},addLoaderDiv:function(b){var a=this.addElementToParent(b,"div",{"class":"klevuLoader",id:"klevuLoader",style:"display:none;"});a.innerHTML='<img src="'+klevu_userOptions.loaderUrl+'" alt="Loading..."/>';a.style.textAlign="center";return},addPoweredByDiv:function(a){var b=this.addElementToParent(a,"div",{style:"display:block !important; height:25px !important; padding-right:5px !important; font-weight:normal !important; text-align:right !important;visibility: visible !important;"}),c=this.addElementToParent(b,"a",{href:"http://www.klevu.com/",target:"_blank",style:"display:block !important; color:#333 !important; font-size:10px !important; text-decoration:none !important; height: inherit !important; font-weight:bold !important;line-height:25px !important; visibility: visible !important;"});c.innerHTML=klevu_uiLabels.poweredBy+' <img src="'+klevu_poweredByLogoPath+'" alt="Powered by Klevu" style="display:inline !important; visibility:visible !important; width:55px !important; vertical-align: baseline !important; height:auto !important;"/>';return}};document.onkeydown=function(a){klevu_layout.handleArrowKeyNavigation(a)};function klevu_loadLayout(){if("undefined"!==typeof klevu_uc&&"undefined"!==typeof klevu_uc.loadLayout){klevu_uc.loadLayout();return}if("undefined"!==typeof klevuLayoutVersion){klevu_userOptions.minimumLetters=1;klevu_userOptions.autoComplete=true;if("undefined"!==typeof klevu_categorySearchEnabled&&klevu_categorySearchEnabled){klevu_userOptions.autoCompleteFilters="category"}if(("undefined"!==typeof klevu_cms_module_enabled&&klevu_cms_module_enabled&&klevu_cmsSearchEnabled)||("undefined"!==typeof klevu_shopifyStore&&klevu_shopifyStore&&"undefined"!==typeof klevu_cmsEnabled&&klevu_cmsEnabled)||("undefined"!==typeof klevu_bigCommerceStore&&klevu_bigCommerceStore&&"undefined"!==typeof klevu_cmsEnabled&&klevu_cmsEnabled)){klevu_userOptions.cmsEnabled=true;klevu_cmsApiKey=klevu_apiKey;if(klevu_userOptions.autoCompleteFilters.trim().length>0){klevu_userOptions.autoCompleteFilters+=":cms"}else{klevu_userOptions.autoCompleteFilters="category:cms"}}else{klevu_userOptions.cmsEnabled=false}klevu_userOptions.layoutVersion="2.0";klevu_userOptions.recordsPerPage=3;if("undefined"!==typeof klevu_productsToShowInSlimLayout){klevu_userOptions.recordsPerPage=klevu_productsToShowInSlimLayout}klevu_userOptions.fetchFilters=false;klevu_filtersEnabled=false;klevu_userOptions.rsPsClickBehaviour="redirect";if("undefined"!==typeof klevu_rsPsClickBehaviour){klevu_userOptions.rsPsClickBehaviour=klevu_rsPsClickBehaviour||"redirect"}if("undefined"!==typeof klevu_uc&&"undefined"!==typeof klevu_uc.showResultsData){klevu_layout.renderResults=klevu_uc.showResultsData}if("undefined"!==typeof klevu_uc&&"undefined"!==typeof klevu_uc.addAutocompleteLayoutToPage){klevu_layoutSetup.addLayoutToPage=klevu_uc.addAutocompleteLayoutToPage}if("undefined"!==typeof klevu_uc&&"undefined"!==typeof klevu_uc.showAutocompleteProducts){klevu_layout.displayProductdata=klevu_uc.showAutocompleteProducts}if("undefined"!==typeof klevu_uc&&"undefined"!==typeof klevu_uc.displayNoResultData){klevu_layout.displayNoResultData=klevu_uc.displayNoResultData}klevu_layoutSetup.addLayoutToPage(document.getElementsByTagName("body")[0])}else{setTimeout(klevu_loadLayout,200)}}klevu_loadLayout();