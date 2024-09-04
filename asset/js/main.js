                ! function(t, e) {
                    var o, n, p, r;
                    e.__SV || (window.posthog = e, e._i = [], e.init = function(i, s, a) {
                            function g(t, e) {
                                var o = e.split(".");
                                2 == o.length && (t = t[o[0]], e = o[1]), t[e] = function() {
                                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                                }
                            }(p = t.createElement("script")).type = "text/javascript", p.async = !0, p.src = s.api_host + "/static/array.js", (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
                            var u = e;
                            for (void 0 !== a ? u = e[a] = [] : a = "posthog", u.people = u.people || [], u.toString = function(t) {
                                    var e = "posthog";
                                    return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e
                                }, u.people.toString = function() {
                                    return u.toString(1) + ".people (stub)"
                                }, o = "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),
                                n = 0; n < o.length; n++) g(u, o[n]);
                            e._i.push([i, s, a])
                        },
                        e.__SV = 1)
                }
                (document, window.posthog || []);
                posthog.init('phc_Rc6y1yvZwwwR09Pl9NtKBo5gzpxr1Ei4Bdbg3kC1Ihz', {
                    api_host: 'https://eu.posthog.com',
                    persistence: 'localStorage+cookie',
                    capture_pageleave: false
                })
                var dataLayer = window.dataLayer || [];
                (function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js',
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    j.setAttribute('nonce', '{cspnonce}');
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-M82LK3JW'); +
                function(a, p, P, b, y) {
                    a.braze = {};
                    a.brazeQueue = [];
                    for (var s = "BrazeSdkMetadata DeviceProperties Card Card.prototype.dismissCard Card.prototype.removeAllSubscriptions Card.prototype.removeSubscription Card.prototype.subscribeToClickedEvent Card.prototype.subscribeToDismissedEvent Card.fromContentCardsJson ImageOnly CaptionedImage ClassicCard ControlCard ContentCards ContentCards.prototype.getUnviewedCardCount Feed Feed.prototype.getUnreadCardCount ControlMessage InAppMessage InAppMessage.SlideFrom InAppMessage.ClickAction InAppMessage.DismissType InAppMessage.OpenTarget InAppMessage.ImageStyle InAppMessage.Orientation InAppMessage.TextAlignment InAppMessage.CropType InAppMessage.prototype.closeMessage InAppMessage.prototype.removeAllSubscriptions InAppMessage.prototype.removeSubscription InAppMessage.prototype.subscribeToClickedEvent InAppMessage.prototype.subscribeToDismissedEvent InAppMessage.fromJson FullScreenMessage ModalMessage HtmlMessage SlideUpMessage User User.Genders User.NotificationSubscriptionTypes User.prototype.addAlias User.prototype.addToCustomAttributeArray User.prototype.addToSubscriptionGroup User.prototype.getUserId User.prototype.getUserId User.prototype.incrementCustomUserAttribute User.prototype.removeFromCustomAttributeArray User.prototype.removeFromSubscriptionGroup User.prototype.setCountry User.prototype.setCustomLocationAttribute User.prototype.setCustomUserAttribute User.prototype.setDateOfBirth User.prototype.setEmail User.prototype.setEmailNotificationSubscriptionType User.prototype.setFirstName User.prototype.setGender User.prototype.setHomeCity User.prototype.setLanguage User.prototype.setLastKnownLocation User.prototype.setLastName User.prototype.setPhoneNumber User.prototype.setPushNotificationSubscriptionType InAppMessageButton InAppMessageButton.prototype.removeAllSubscriptions InAppMessageButton.prototype.removeSubscription InAppMessageButton.prototype.subscribeToClickedEvent FeatureFlag FeatureFlag.prototype.getStringProperty FeatureFlag.prototype.getNumberProperty FeatureFlag.prototype.getBooleanProperty FeatureFlag.prototype.getImageProperty FeatureFlag.prototype.getJsonProperty FeatureFlag.prototype.getTimestampProperty automaticallyShowInAppMessages destroyFeed hideContentCards showContentCards showFeed showInAppMessage deferInAppMessage toggleContentCards toggleFeed changeUser destroy getDeviceId getDeviceId initialize isPushBlocked isPushPermissionGranted isPushSupported logCardClick logCardDismissal logCardImpressions logContentCardImpressions logContentCardClick logCustomEvent logFeedDisplayed logInAppMessageButtonClick logInAppMessageClick logInAppMessageHtmlClick logInAppMessageImpression logPurchase openSession requestPushPermission removeAllSubscriptions removeSubscription requestContentCardsRefresh requestFeedRefresh refreshFeatureFlags requestImmediateDataFlush enableSDK isDisabled setLogger setSdkAuthenticationSignature addSdkMetadata disableSDK subscribeToContentCardsUpdates subscribeToFeedUpdates subscribeToInAppMessage subscribeToSdkAuthenticationFailures toggleLogging unregisterPush wipeData handleBrazeAction subscribeToFeatureFlagsUpdates getAllFeatureFlags logFeatureFlagImpression".split(" "), i = 0; i < s.length; i++) {
                        for (var m = s[i], k = a.braze, l = m.split("."), j = 0; j < l.length - 1; j++) k = k[l[j]];
                        k[l[j]] = (new Function("return function " + m.replace(/\./g, "_") + "(){window.brazeQueue.push(arguments); return true}"))()
                    }
                    window.braze.getDeferredInAppMessage = function() {
                        return new window.braze.InAppMessage
                    };
                    window.braze.getCachedContentCards = function() {
                        return new window.braze.ContentCards
                    };
                    window.braze.getCachedFeed = function() {
                        return new window.braze.Feed
                    };
                    window.braze.getUser = function() {
                        return new window.braze.User
                    };
                    window.braze.getFeatureFlag = function() {
                        return new window.braze.FeatureFlag
                    };
                    (y = p.createElement(P)).type = 'text/javascript';
                    y.src = 'https://js.appboycdn.com/web-sdk/5.3/braze.min.js';
                    y.async = 1;
                    (b = p.getElementsByTagName(P)[0]).parentNode.insertBefore(y, b)
                }(window, document, 'script');
                window.onUsersnapLoad = function(api) {
                    api.init();
                    window.Usersnap = api;
                }
                var script = document.createElement('script');
                script.defer = 1;
                script.src = 'https://widget.usersnap.com/global/load/bb6a004a-8f03-4d2a-88fb-a63499d4591a?onload=onUsersnapLoad';
                document.getElementsByTagName('head')[0].appendChild(script);