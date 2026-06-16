package com.example.androidbasic

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import android.widget.Spinner
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class Interaction : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_interaction)

        val btnSubmit = findViewById<Button>(R.id.submit)
        btnSubmit.setOnClickListener {
           Toast.makeText(this,"Clicked", Toast.LENGTH_SHORT).show()
         }
        btnSubmit.setOnLongClickListener {
            Toast.makeText(this,"Long Clicked", Toast.LENGTH_SHORT).show()
            true
        }

        val username = findViewById<EditText>(R.id.userName)
        username.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {

            }

            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {
               println("Text : $s")
            }

            override fun afterTextChanged(s: Editable?) {
                println("Text Completed : $s")
            }

        })

        var checkbox = findViewById<CheckBox>(R.id.terms)
        checkbox.setOnCheckedChangeListener { buttonView, isChecked ->
            if(isChecked) {
                Toast.makeText(this,"Checked", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this,"Un-Checked", Toast.LENGTH_SHORT).show()
            }
        }

        val cities = arrayOf("Ahmedabad", "surat", "vadodara")
        val adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1,cities)
        val spinner = findViewById<Spinner>(R.id.city)
        spinner.adapter = adapter
        spinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(
                parent: AdapterView<*>?,
                view: View?,
                position: Int,
                id: Long
            ) {
                val selectedCity = cities[id.toInt()]
                Toast.makeText(applicationContext,selectedCity,Toast.LENGTH_SHORT).show()
            }

            override fun onNothingSelected(parent: AdapterView<*>?) {
                TODO("Not yet implemented")
            }

        }
    }
}