package com.example.androidbasic

import android.os.Bundle
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class DisplayActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_display)
        val name = intent.getStringExtra("EXTRA_NAME")
        val city = intent.getStringExtra("EXTRA_CITY")
        val gender = intent.getStringExtra("EXTRA_GENDER")
        val terms = intent.getBooleanExtra("EXTRA_TERMS", false)
        val notif = intent.getBooleanExtra("EXTRA_NOTIF", false)
        val rating = intent.getFloatExtra("EXTRA_RATING", 0f)
        val exp = intent.getFloatExtra("EXTRA_EXP", 0f)
        val dob = intent.getStringExtra("EXTRA_DOB")
        val time = intent.getStringExtra("EXTRA_TIME")

        var textView = findViewById<TextView>(R.id.textView)
        textView.text = """
            Registration Details:
            --------------------
            Name: $name
            City: $city
            Gender: $gender
            Terms Accepted: ${if(terms) "Yes" else "No"}
            Notifications: ${if(notif) "Enabled" else "Disabled"}
            Skill Level: $rating stars
            Experience: $exp years
            Date of Birth: $dob
            Preferred Time: $time
        """.trimIndent()
    }
}