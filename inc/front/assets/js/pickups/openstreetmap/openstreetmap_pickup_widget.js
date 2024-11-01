"use strict";function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function set_wms_openstreetmap_pickup_modal(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wms_pickup_open_modal_openstreetmap",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.getElementsByClassName(e);if(0!==n.length){var o,i=_createForOfIteratorHelper(n);try{for(i.s();!(o=i.n()).done;){var r=o.value;null==r.getAttribute("wms-backbone-set")&&(r.addEventListener("click",function(e){e.preventDefault(),jQuery(this).WCBackboneModal({template:0<t.length?t:this.getAttribute("wms-pickup-modal-id")}),modal=document.getElementById(0<t.length?t:this.getAttribute("wms-pickup-modal-id")),loader=modal.querySelector(".wc-backbone-modal-loader"),init_openstreetmap()}),r.setAttribute("wms-backbone-set",!0))}}catch(e){i.e(e)}finally{i.f()}}}function init_openstreetmap(){var e,t,n,o,i,r;my_map=L.map("wms_pickup_modal_map_openstreemap").setView([48.866667,2.333333],14),L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',minZoom:1,maxZoom:20}).addTo(my_map);var a="Paris",c=document.getElementById("shipping_city"),p=document.getElementById("billing_city"),s=document.getElementById("shipping-city"),_=document.getElementById("shipping-city"),l=(null===(e=document.getElementById("ship-to-different-address-checkbox"))||void 0===e?void 0:e.checked)||!1;c&&c.value&&l?a=c:p&&p.value?a=p:s&&s.value?a=s:_&&_.value&&(a=_),modal.querySelector(".wms_pickup_modal_address_city_input").value=null!==(t=a.value)&&void 0!==t?t:a;var u="75001",d=document.getElementById("shipping_postcode"),m=document.getElementById("billing_postcode"),y=document.getElementById("shipping-postcode"),v=document.getElementById("billing-postcode");d&&l?u=d:m?u=m:y?u=y:v&&(u=v),modal.querySelector(".wms_pickup_modal_address_zipcode_input").value=null!==(n=u.value)&&void 0!==n?n:u;var f="FR",g=document.getElementById("shipping_country"),k=document.getElementById("billing_country"),w=null===(o=document.getElementById("shipping-country"))||void 0===o?void 0:o.querySelector("input"),h=null===(i=document.getElementById("billing-country"))||void 0===i?void 0:i.querySelector("input");if(g&&l)f=g;else if(k)f=k;else if(w){var b,S=_createForOfIteratorHelper(modal.querySelector(".wms_pickup_modal_address_country_select select").options);try{for(S.s();!(b=S.n()).done;){if((E=b.value).text===w.value){f=E;break}}}catch(e){S.e(e)}finally{S.f()}}else if(h){var j,I=_createForOfIteratorHelper(modal.querySelector(".wms_pickup_modal_address_country_select select").options);try{for(I.s();!(j=I.n()).done;){var E;if((E=j.value).text===h.value){f=E;break}}}catch(e){I.e(e)}finally{I.f()}}modal.querySelector(".wms_pickup_modal_address_country_select select").value=null!==(r=f.value)&&void 0!==r?r:f,get_pickup_point_ajax_opentstreet_map(),set_button_reload_points_opentstreet_map()}function get_address_modal_opentstreet_map(){var e=modal.querySelector(".wms_pickup_modal_address_country_select select").value;return""===e&&(e="FR"),{country:e,zipcode:modal.querySelector(".wms_pickup_modal_address_zipcode_input").value,city:modal.querySelector(".wms_pickup_modal_address_city_input").value}}function get_pickup_point_ajax_opentstreet_map(){var e=get_address_modal_opentstreet_map(),t=e.country,n=e.zipcode,o=e.city;loader.style.display="block";var i=jQuery("#wms_nonce").val(),r={action:"wms_get_pickup_point",shipping_provider:jQuery("#wms_shipping_provider").val(),country:t,zipcode:n,city:o,wms_nonce:i};return loader.style.display="none",jQuery.get(wmsajaxurl,r).then(function(e){if(e.error)return set_error_message(e.error_message),!1;listing_container=modal.querySelector(".wms_pickup_modal_listing"),listing_container.innerHTML="",e.data.map(function(t){e.data[0]==t&&my_map.setView([parseFloat(t.latitude),parseFloat(t.longitude)],13);var n=L.marker([parseFloat(t.latitude),parseFloat(t.longitude)],{title:t.name}).addTo(my_map),o=wms_generate_map_popup_openstreet_map(t);n.bindPopup("<b>"+t.name+"</b><br>"+o).on("click",set_marker_onclick_actions_openstreet_map),markers.push(n)}),set_select_point_opentstreet_map(),set_ship_here_button_onclick_action_opentstreet_map()})}function wms_generate_map_popup_openstreet_map(e){var t={0:__("Lundi","wc-multishippping"),1:__("Mardi","wc-multishippping"),2:__("Mercredi","wc-multishippping"),3:__("Jeudi","wc-multishippping"),4:__("Vendredi","wc-multishippping"),5:__("Samedi","wc-multishippping"),6:__("Dimanche","wc-multishippping")},n='<table class="wms_pickup_open_time">\n                                    <tbody>';if(null!=e.opening_time){e.opening_time.map(function(e,o){n+="<tr><td>".concat(t[o],"</td><td> ").concat(e,"</td></tr>")}),n+="</tbody></table>";var o='<div class="wms_pickup_modal_listing_one" data-pickup-name="'.concat(e.name,'">\n                                <div class="wms_pickup_name" data-pickup-name="').concat(e.nom,'">').concat(e.name,'</div>\n                                <div class="wms_pickup_address1" data-pickup-address1="').concat(e.address,'">').concat(e.address,'</div>\n                                <div class="wms_pickup_address2">\n                                    <span class="wms_pickup_zipcode" data-pickup-zipcode="').concat(e.zip_code,'">').concat(e.zip_code,'</span>\n                                    <span class="wms_pickup_city" data-pickup-city="').concat(e.city,'">').concat(e.city,'</span>\n                                </div>\n                                <div class="wms_pickup_country" data-pickup-country="').concat(e.country,'">').concat(e.country,"</div> \n                                ").concat(n,'\n                                <button class="button wms_pickup_modal_listing_one_button_ship" data-pickup-id="').concat(e.id,'">\n                                    ').concat(__("Envoyer à cette adresse","wc-multishipping"),"\n                                </button>\n                            </div>");return listing_container.innerHTML+=o,o.replace("wms_pickup_modal_listing_one_button_ship","wms_pickup_modal_infowindow_one_button_ship")}}function set_button_reload_points_opentstreet_map(){modal.querySelector(".wms_pickup_modal_address_search").addEventListener("click",function(){clear_markers_on_map_opentstreet_map(),get_pickup_point_ajax_opentstreet_map()})}function clear_markers_on_map_opentstreet_map(){for(var e=0;e<markers.length;e++)my_map.removeLayer(markers[e])}function set_error_message(e){modal.querySelector(".wms_pickup_modal_listing").innerHTML='<div style="color: #ff0000">'.concat(e,"</div>")}function set_select_point_opentstreet_map(){var e,t=_createForOfIteratorHelper(document.getElementsByClassName("wms_pickup_modal_listing_one"));try{for(t.s();!(e=t.n()).done;){e.value.addEventListener("click",function(){unselect_points_opentstreet_map(),this.classList.add("wms_is_selected")})}}catch(e){t.e(e)}finally{t.f()}}function unselect_points_opentstreet_map(){var e,t=_createForOfIteratorHelper(document.getElementsByClassName("wms_pickup_modal_listing_one"));try{for(t.s();!(e=t.n()).done;){e.value.classList.remove("wms_is_selected")}}catch(e){t.e(e)}finally{t.f()}}function set_marker_onclick_actions_openstreet_map(e){unselect_points_opentstreet_map();var t=document.querySelector('.wms_pickup_modal_listing [data-pickup-name="'.concat(e.title,'"]'));t.scrollIntoView(),t.classList.add("wms_is_selected");var n,o=_createForOfIteratorHelper(document.getElementsByClassName("wms_pickup_modal_infowindow_one_button_ship"));try{for(o.s();!(n=o.n()).done;){var i=n.value;set_ship_here_button_onclick_action_opentstreet_map(jQuery(i))}}catch(e){o.e(e)}finally{o.f()}}function set_ship_here_button_onclick_action_opentstreet_map(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null==e&&(e=document.getElementsByClassName("wms_pickup_modal_listing_one_button_ship"));var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){t.value.addEventListener("click",function(){var e=document.querySelector('[id="wms_pickup_point"]');e.value=this.getAttribute("data-pickup-id");var t=new Event("change");e.dispatchEvent(t);var n=this.closest(".wms_pickup_modal_listing_one"),o=n.getAttribute("data-pickup-name"),i=this.getAttribute("data-pickup-id"),r=n.querySelector(".wms_pickup_address1").getAttribute("data-pickup-address1"),a=n.querySelector(".wms_pickup_zipcode").getAttribute("data-pickup-zipcode"),c=n.querySelector(".wms_pickup_city").getAttribute("data-pickup-city"),p=n.querySelector(".wms_pickup_country").getAttribute("data-pickup-country"),s=[o,r,c+" "+a,p],_=jQuery("#wms_ajax_error"),l=jQuery("#wms_pickup_selected"),u=jQuery("#wms_shipping_provider").val(),d=jQuery("#wms_nonce").val();confirm(sprintf(__("Merci de confirmer votre choix: %s","wc-multishipping"),"\n\n"+s.join("\n")))&&jQuery.ajax({url:wmsajaxurl,type:"POST",dataType:"json",data:{action:"wms_select_pickup_point",pickup_id:i,pickup_name:o,pickup_address:r,pickup_zipcode:a,pickup_city:c,pickup_country:p,pickup_provider:u,wms_nonce:d},beforeSend:function(){_.hide()},success:function(e){if(!1===e.error){l.html("<div>"+s.join("</div><div>")+"</div>"),jQuery("#wms_pickup_info").innerText=JSON.stringify(s),modal.querySelector(".modal-close").click();var t,n=_createForOfIteratorHelper(jQuery(".wc-block-components-shipping-address"));try{for(n.s();!(t=n.n()).done;){var o=t.value;-1!=jQuery(o).html().indexOf("Livraison à")&&jQuery(o).html("Livraison à : "+s.join("\n"))}}catch(e){n.e(e)}finally{n.f()}jQuery("body").trigger("update_checkout")}else _.html(e.error_message),_.show()}})})}}catch(e){n.e(e)}finally{n.f()}}jQuery(function(e){e(document.body).on("updated_shipping_method",function(){set_wms_openstreetmap_pickup_modal()}).on("updated_wc_div",function(){set_wms_openstreetmap_pickup_modal()}).on("updated_checkout",function(){set_wms_openstreetmap_pickup_modal()}),set_wms_openstreetmap_pickup_modal()});