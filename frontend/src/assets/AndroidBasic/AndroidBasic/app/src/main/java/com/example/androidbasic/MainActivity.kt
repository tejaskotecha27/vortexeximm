package com.example.androidbasic

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val relativeActivity = findViewById<Button>(R.id.relative)
        relativeActivity.setOnClickListener {
            val  intent = Intent(this,RelativeActivity::class.java)
            startActivity(intent)
        }

        val constraintActivity = findViewById<Button>(R.id.constraint)
        constraintActivity.setOnClickListener {
            val  intent = Intent(this,ConstraintActivity::class.java)
            startActivity(intent)
        }

        val gridActivity = findViewById<Button>(R.id.gridView)
        gridActivity.setOnClickListener {
            val  intent = Intent(this,GridActivity::class.java)
            startActivity(intent)
        }

        val userActivity = findViewById<Button>(R.id.createUserBtn)
        userActivity.setOnClickListener {
            val  intent = Intent(this,RegisterUser::class.java)
            startActivity(intent)
        }

        val listActivity = findViewById<Button>(R.id.listView)
        listActivity.setOnClickListener {
            val  intent = Intent(this,ListActivity::class.java)
            startActivity(intent)
        }

        val customListActivity = findViewById<Button>(R.id.cstmListView)
        customListActivity.setOnClickListener {
            val  intent = Intent(this,CustomListDesign::class.java)
            startActivity(intent)
        }

        val spActivity = findViewById<Button>(R.id.sp)
        spActivity.setOnClickListener {
            val  intent = Intent(this,SharedPreference::class.java)
            startActivity(intent)
        }

        val interactionActivity = findViewById<Button>(R.id.interactionActivity)
        interactionActivity.setOnClickListener {
            val  intent = Intent(this,Interaction::class.java)
            startActivity(intent)
        }
    }
}