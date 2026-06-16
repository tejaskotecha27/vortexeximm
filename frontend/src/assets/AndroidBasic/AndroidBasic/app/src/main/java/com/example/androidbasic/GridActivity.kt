package com.example.androidbasic

import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.GridView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class GridActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_grid)
        val gridView = findViewById<GridView>(R.id.simpleGridView)
        val data = arrayOf("Item 1", "Item 2", "Item 3", "Item 4")

        val adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, data)
        gridView.adapter = adapter
    }
}