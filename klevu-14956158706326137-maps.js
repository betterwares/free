var klevu_keywordUrlMap=[{keywords:['phone number','phone'],url:'https://www.better.org.uk/contactus'},{keywords:['guestpass','guest pass','daypass','day pass'],url:'https://www.better.org.uk/guestpasses'},{keywords:['off peak','offpeak'],url:'https://www.better.org.uk/memberships/'},{keywords:['login','login','log in','log in'],url:'https://better.legendonlineservices.co.uk/enterprise/account/login'},{keywords:['zumba','zumba'],url:'https://www.better.org.uk/leisure-centre/activities/fitness-classes'},{keywords:['parking','parking'],url:'https://passes.better.org.uk/carpark/'},{keywords:['junior gym','gym kids','junior'],url:'https://www.better.org.uk/memberships/all-inclusive-membership/better-hf-junior'},{keywords:['trampoline','trampolining','trampoline','trampolining'],url:'https://www.better.org.uk/activities/extreme'},{keywords:['price','prices','price','prices'],url:'https://www.better.org.uk/memberships'},{keywords:['spa','spa'],url:'https://www.better.org.uk/facilities-and-activities/facility-types/spa-london'}],klevu_autoCorrectMap=[];function klevu_sortAutocorrectMap(){var maxLength=0,i=0,len1=0,len2=0,temp,currLength=0,j=0;for(i=0,len1=klevu_autoCorrectMap.length;i<len1;i++){maxLength=klevu_autoCorrectMap[i].keyword.length;for(j= i+1,len2=klevu_autoCorrectMap.length;j<len2;j++){currLength=klevu_autoCorrectMap[j].keyword.length;if(maxLength<currLength){maxLength=currLength;temp=klevu_autoCorrectMap[i];klevu_autoCorrectMap[i]=klevu_autoCorrectMap[j];klevu_autoCorrectMap[j]=temp;}}}}klevu_sortAutocorrectMap();