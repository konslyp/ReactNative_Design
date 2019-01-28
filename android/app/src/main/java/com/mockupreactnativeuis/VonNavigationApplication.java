package com.mockupreactnativeuis;

/**
 * Created by vontechnology on 5/6/17.
 */

import com.reactnativenavigation.NavigationApplication;
import com.adobe.creativesdk.foundation.auth.IAdobeAuthClientCredentials;


public abstract class VonNavigationApplication extends NavigationApplication implements IAdobeAuthClientCredentials  {
    private static final String CREATIVE_SDK_CLIENT_ID      = "a1ad786afdf44371894405a75064b0ae"; // API key
    private static final String CREATIVE_SDK_CLIENT_SECRET  = "7e8826b2-b217-487e-9d33-d4a998632a54";
    private static final String CREATIVE_SDK_REDIRECT_URI   = "ams+c15248615124f926252694d5ed74b4d761c23437://adobeid/a1ad786afdf44371894405a75064b0ae";
    private static final String[] CREATIVE_SDK_SCOPES       = {"email", "profile", "address"};

    @Override
    public String getClientID() {
        return CREATIVE_SDK_CLIENT_ID;
    }

    @Override
    public String getClientSecret() {
        return CREATIVE_SDK_CLIENT_SECRET;
    }

    @Override
    public String[] getAdditionalScopesList() {
        return CREATIVE_SDK_SCOPES;
    }

    @Override
    public String getRedirectURI() {
        return CREATIVE_SDK_REDIRECT_URI;
    }
}
