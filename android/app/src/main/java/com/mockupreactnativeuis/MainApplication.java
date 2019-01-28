package com.mockupreactnativeuis;

import android.support.multidex.MultiDex;

import com.adobe.creativesdk.foundation.AdobeCSDKFoundation;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactPackage;

import com.reactlibrary.RNGooglePlacePickerPackage;
import com.reactnativenavigation.NavigationApplication;
import com.imagepicker.ImagePickerPackage;
import cn.zjy.actionsheet.rn.ActionSheetPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends VonNavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      new VectorIconsPackage(),
      new ImagePickerPackage(),
      new MapsPackage(),
      new RNGooglePlacePickerPackage(),
      new ActionSheetPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public void onCreate() {
    super.onCreate();
    MultiDex.install(getBaseContext());
    SoLoader.init(this, /* native exopackage */ false);
    AdobeCSDKFoundation.initializeCSDKFoundation(getApplicationContext());
  }
}
