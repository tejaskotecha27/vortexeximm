package com.example.androidbasic

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class ListActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_list)
        val techList = arrayOf("Android", "Kotlin", "Firebase", "Jetpack Compose", "Room Database", "Retrofit")

        val listView = findViewById<ListView>(R.id.simpleListView)

        val adapter = ArrayAdapter(
            this,
            android.R.layout.simple_list_item_1,
            techList
        )
        listView.adapter = adapter
        listView.setOnItemClickListener { parent, view, position, id ->
            val selectedItem = techList[position]
            Toast.makeText(this, "Clicked: $selectedItem", Toast.LENGTH_SHORT).show()
        }
    }
}