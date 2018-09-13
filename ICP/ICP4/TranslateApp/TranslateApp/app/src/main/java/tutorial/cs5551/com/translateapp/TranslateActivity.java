//package tutorial.cs5551.com.translateapp;
//
//import android.content.Context;
//import android.content.Intent;
//import android.os.Bundle;
//import android.support.design.widget.FloatingActionButton;
//import android.support.design.widget.Snackbar;
//import android.support.v7.app.AppCompatActivity;
//import android.support.v7.widget.Toolbar;
//import android.util.Log;
//import android.view.View;
//import android.view.inputmethod.InputMethodManager;
//import android.widget.ArrayAdapter;
//import android.widget.TextView;
//
//import org.json.JSONArray;
//import org.json.JSONException;
//import org.json.JSONObject;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Iterator;
//import java.util.List;
//import java.util.Map;
//
//import okhttp3.Call;
//import okhttp3.Callback;
//import okhttp3.OkHttpClient;
//import okhttp3.Request;
//import okhttp3.Response;
//
//public class TranslateActivity extends AppCompatActivity {
//
//    String API_URL = "https://api.fullcontact.com/v2/person.json?";
//    String API_KEY = "b29103a702edd6a";
//    String Yandex_key = "trnsl.1.1.20180619T052424Z.a6524ff57a9afa33.ae7bb436e06cccd1051329db4a12d392716c6e67";
//    String sourceText;
//    TextView outputTextView;
//    Map<String,String> mapLanguages;
//    Context mContext;
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_translate);
//        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
//        setSupportActionBar(toolbar);
//        outputTextView = (TextView) findViewById(R.id.txt_Result);
//        GetLanguages();
//    }
//
//    public void GetLanguages(){
//        String getURL = "https://translate.yandex.net/api/v1.5/tr.json/getLangs?key="
//                + Yandex_key +
//                "&ui=en";//The API service URL
//        final String response = "";
//        OkHttpClient client = new OkHttpClient();
//        try {
//            Request request = new Request.Builder()
//                    .url(getURL)
//                    .build();
//            client.newCall(request).enqueue(new Callback() {
//                @Override
//                public void onFailure(Call call, IOException e) {
//                    System.out.println(e.getMessage());
//                }
//                @Override
//                public void onResponse(Call call, Response response) throws IOException {
//                    final JSONObject jsonResult;
//                    final JSONObject languages;
//                    final Iterator<String> keys;
//                    final String result = response.body().string();
//                    try {
//                        jsonResult = new JSONObject(result);
//                        //JSONArray convertedTextArray = jsonResult.getJSONArray("langs");
//
//                        //final String convertedText = convertedTextArray.get(0).toString();
//                        languages = jsonResult.optJSONObject("langs");
//                        keys = languages.keys();
//                        final List<String> lstLanguages = new ArrayList<>();
//                        while (keys.hasNext()){
//                            String k = keys.next();
//                            String v = languages.getString(k);
//                            lstLanguages.add(v);
//                            mapLanguages.put(v,k);
//                        }
////                        runOnUiThread(new Runnable() {
////                            @Override
////                            public void run() {
////                                final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_dropdown_item, lstLanguages);
////                            }
////                        }
//
//                        Log.d("okHttp", jsonResult.toString());
//                        runOnUiThread(new Runnable() {
//                            @Override
//                            public void run() {
//                                outputTextView.setText(convertedText);
//                            }
//                        });
//                    } catch (JSONException e) {
//                        e.printStackTrace();
//                    }
//                }
//            });
//        } catch (Exception ex) {
//            outputTextView.setText(ex.getMessage());
//
//        }
//    }
//
//    public void translateText(View v) {
//        TextView sourceTextView = (TextView) findViewById(R.id.txt_Email);
//
//        sourceText = sourceTextView.getText().toString();
//        String getURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?" +
//                "key=trnsl.1.1.20151023T145251Z.bf1ca7097253ff7e." +
//                "c0b0a88bea31ba51f72504cc0cc42cf891ed90d2&text=" + sourceText +"&" +
//                "lang=en-es&[format=plain]&[options=1]&[callback=set]";//The API service URL
//        final String response1 = "";
//        OkHttpClient client = new OkHttpClient();
//        try {
//            Request request = new Request.Builder()
//                    .url(getURL)
//                    .build();
//            client.newCall(request).enqueue(new Callback() {
//                @Override
//                public void onFailure(Call call, IOException e) {
//                    System.out.println(e.getMessage());
//                }
//                @Override
//                public void onResponse(Call call, Response response) throws IOException {
//                    final JSONObject jsonResult;
//                    final String result = response.body().string();
//                    try {
//                        jsonResult = new JSONObject(result);
//                        JSONArray convertedTextArray = jsonResult.getJSONArray("text");
//                        final String convertedText = convertedTextArray.get(0).toString();
//                        Log.d("okHttp", jsonResult.toString());
//                        runOnUiThread(new Runnable() {
//                            @Override
//                            public void run() {
//                                outputTextView.setText(convertedText);
//                            }
//                        });
//                    } catch (JSONException e) {
//                        e.printStackTrace();
//                    }
//                }
//            });
//        } catch (Exception ex) {
//            outputTextView.setText(ex.getMessage());
//
//        }
//    }
//    public void Logout(View v) {
//        Intent intent = new Intent(this, LoginActivity.class);
//        startActivity(intent);
//    }
//}
package tutorial.cs5551.com.translateapp;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class TranslateActivity extends AppCompatActivity {

    String API_URL = "https://api.fullcontact.com/v2/person.json?";
    String API_KEY = "b29103a702edd6a";

    String yandex_key = "trnsl.1.1.20180619T052424Z.a6524ff57a9afa33.ae7bb436e06cccd1051329db4a12d392716c6e67";

    String sourceText;
    TextView outputTextView;
    Spinner spinner1;
    Spinner spinner2;

    Map<String, String> mapLanguages;

    Context mContext;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_translate);

        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        outputTextView = (TextView) findViewById(R.id.txt_Result);
        spinner1 = (Spinner) findViewById(R.id.lang1);
        spinner2 = (Spinner) findViewById(R.id.lang2);
        setSupportActionBar(toolbar);
        mapLanguages = new HashMap<String, String>();
        GetLangugaes();
    }

    public void GetLangugaes() {

        String getURL = "https://translate.yandex.net/api/v1.5/tr.json/getLangs?key="
                + yandex_key +
                "&ui=en";//The API service URL

        OkHttpClient client = new OkHttpClient();
        try {
            Request request = new Request.Builder()
                    .url(getURL)
                    .build();

            client.newCall(request).enqueue(new Callback() {

                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println(e.getMessage());
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {

                    final JSONObject jsonResult;
                    final JSONObject lang;
                    final Iterator<String> keys;
                    final String result = response.body().string();
                    try {
                        jsonResult = new JSONObject(result);
                        lang = jsonResult.optJSONObject("langs");
                        keys = lang.keys();
                        List<String> lstLanguages = new ArrayList<>();
                        while ( keys.hasNext() )
                        {
                            String key = keys.next();
                            String value = lang.getString(key);
                            lstLanguages.add(value);
                            mapLanguages.put(value, key);
                        }
                        final ArrayAdapter<String> languageAdapter = new ArrayAdapter<String>(TranslateActivity.this, android.R.layout.simple_spinner_item, lstLanguages);

                        // Execute this once the UI thread is ready to update.
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {

                                spinner1.setAdapter(languageAdapter);
                                spinner2.setAdapter(languageAdapter);

                                int englishPosition = languageAdapter.getPosition("English");
                                spinner1.setSelection(englishPosition);

                                int spanishPosition = languageAdapter.getPosition("Spanish");
                                spinner2.setSelection(spanishPosition);
                            }
                        });

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }); // callback
        } // external try
        catch (Exception ex) {
            outputTextView.setText(ex.getMessage());
        }

    }

    public void Logout(View v) {
        Intent intent = new Intent(this, LoginActivity.class);
        startActivity(intent);
    }

    public void translateText(View v) {
        TextView sourceTextView = (TextView) findViewById(R.id.txt_Email);

        sourceText = sourceTextView.getText().toString();

        String fromLanguage = spinner1.getSelectedItem().toString();
        String fromCode = mapLanguages.get(fromLanguage);

        String toLanguage = spinner2.getSelectedItem().toString();
        String toCode = mapLanguages.get(toLanguage);

        String getURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="
                + yandex_key +
                "&text=" + sourceText +"&" +
                "lang=" + fromCode + "-" + toCode + "&[format=plain]&[options=1]&[callback=set]";

        final String response1 = "";
        OkHttpClient client = new OkHttpClient();
        try {
            Request request = new Request.Builder()
                    .url(getURL)
                    .build();
            client.newCall(request).enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println(e.getMessage());
                }
                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    final JSONObject jsonResult;
                    final String result = response.body().string();
                    try {
                        jsonResult = new JSONObject(result);
                        JSONArray convertedTextArray = jsonResult.getJSONArray("text");
                        final String convertedText = convertedTextArray.get(0).toString();
                        Log.d("okHttp", jsonResult.toString());
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                outputTextView.setText(convertedText);
                            }
                        });
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });


        } catch (Exception ex) {
            outputTextView.setText(ex.getMessage());

        }

    }
}