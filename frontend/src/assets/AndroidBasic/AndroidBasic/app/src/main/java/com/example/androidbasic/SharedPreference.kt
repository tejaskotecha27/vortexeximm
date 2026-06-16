package com.example.androidbasic

import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class SharedPreference : AppCompatActivity() {
    private lateinit var sharedPref : SharedPreferences
    private lateinit var textViewName : TextView
    private lateinit var textViewAge : TextView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_shared_preference)
        sharedPref = getSharedPreferences("UserPrefs", Context.MODE_PRIVATE)
        textViewName = findViewById(R.id.displayName)
        textViewAge = findViewById(R.id.displayAge)
        displayUserData()
        val setBtn = findViewById<Button>(R.id.set)
        val deleteBtn = findViewById<Button>(R.id.remove)
        setBtn.setOnClickListener {
           val username = findViewById<EditText>(R.id.askName)
           val userage = findViewById<EditText>(R.id.askAge)
           if (username.text != null && userage.text != null && username.text.toString() != "" && userage.text.toString() != "")
           {
               saveUserData(username.text.toString(),userage.text.toString().toInt())
               displayUserData()
           }
        }
        deleteBtn.setOnClickListener {
            deleteUserData()
            displayUserData()
        }
    }

    fun saveUserData(name: String, age: Int) {
        val editor = sharedPref.edit()

        editor.putString("user_name", name)
        editor.putInt("user_age", age)

        editor.apply()
    }

    fun displayUserData() {
        val name = sharedPref.getString("user_name", "No Name Found")
        val age = sharedPref.getInt("user_age", 0)

        // Example: Setting text to a TextView
        textViewName.text = "Name: $name"
        textViewAge.text = "Age: $age"
    }

    fun deleteUserData() {
        val editor = sharedPref.edit()

        editor.remove("user_name")
        editor.remove("user_age")
        editor.clear()

        editor.apply()
    }
}