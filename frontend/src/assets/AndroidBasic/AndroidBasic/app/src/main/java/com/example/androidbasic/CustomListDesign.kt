package com.example.androidbasic

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.androidbasic.models.User

class CustomListDesign : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_custom_list_design)

        val listView = findViewById<ListView>(R.id.myListView)
        // Data Array
        val userList = arrayListOf(
            User("Diya", "Away", R.mipmap.female),
            User("Manish", "Online", R.mipmap.male)
        )
        val adapter = UserAdapter(this,userList)
        listView.adapter = adapter


        listView.setOnItemClickListener { _, _, position, _ ->
            val user = userList[position]
            Toast.makeText(this, "${user.name} clicked", Toast.LENGTH_SHORT).show()
        }
    }
}