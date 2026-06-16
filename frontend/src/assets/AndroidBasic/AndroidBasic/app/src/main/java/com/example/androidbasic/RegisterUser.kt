package com.example.androidbasic

import android.content.Intent
import android.os.Bundle
import android.widget.AutoCompleteTextView
import android.widget.Button
import android.widget.CheckBox
import android.widget.DatePicker
import android.widget.EditText
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.RatingBar
import android.widget.TimePicker
import android.widget.ToggleButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.google.android.material.slider.Slider

class RegisterUser : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register_user)
        val etName = findViewById<EditText>(R.id.etName)
        val autoCity = findViewById<AutoCompleteTextView>(R.id.autoCompleteCity)
        val rgGender = findViewById<RadioGroup>(R.id.radioGroupGender)
        val cbTerms = findViewById<CheckBox>(R.id.cbTerms)
        val toggleNotif = findViewById<ToggleButton>(R.id.toggleNotifications)
        val ratingBar = findViewById<RatingBar>(R.id.ratingBar)
        val sliderExp = findViewById<Slider>(R.id.experienceSlider)
        val datePicker = findViewById<DatePicker>(R.id.datePicker)
        val timePicker = findViewById<TimePicker>(R.id.timePicker)
        val btnRegister = findViewById<Button>(R.id.btnRegister)

        btnRegister.setOnClickListener {
            val name = etName.text.toString()
            val city = autoCity.text.toString()

            val selectedGenderId = rgGender.checkedRadioButtonId
            val gender = findViewById<RadioButton>(selectedGenderId)?.text.toString()

            val termsAccepted = cbTerms.isChecked
            val notifications = toggleNotif.isChecked // true if ON
            val rating = ratingBar.rating
            val experience = sliderExp.value

            val dob = "${datePicker.dayOfMonth}/${datePicker.month + 1}/${datePicker.year}"
            val time = "${timePicker.hour}:${timePicker.minute}"


            val intent = Intent(this, DisplayActivity::class.java).apply {
                putExtra("EXTRA_NAME", name)
                putExtra("EXTRA_CITY", city)
                putExtra("EXTRA_GENDER", gender)
                putExtra("EXTRA_TERMS", termsAccepted)
                putExtra("EXTRA_NOTIF", notifications)
                putExtra("EXTRA_RATING", rating)
                putExtra("EXTRA_EXP", experience)
                putExtra("EXTRA_DOB", dob)
                putExtra("EXTRA_TIME", time)
            }
            startActivity(intent)
        }
    }
}