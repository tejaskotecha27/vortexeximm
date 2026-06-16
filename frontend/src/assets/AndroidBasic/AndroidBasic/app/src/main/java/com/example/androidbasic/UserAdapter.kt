package com.example.androidbasic

import android.annotation.SuppressLint
import android.content.Context
import android.icu.text.Transliterator.Position
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.view.ViewParent
import android.widget.ArrayAdapter
import android.widget.ImageView
import android.widget.TextView
import com.example.androidbasic.models.User

class UserAdapter(context: Context, private val userList : List<User>)
    : ArrayAdapter<User>(context, R.layout.list_item_user, userList ) {

        @SuppressLint("ViewHolder")
        override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {
            val view = LayoutInflater.from(context).inflate(R.layout.list_item_user, parent, false)
            val holder  = ViewHolder()
            holder.userName = view.findViewById(R.id.userName)
            holder.userImage = view.findViewById(R.id.userImage)
            holder.userStatus = view.findViewById(R.id.userStatus)

            val user = userList[position]
            holder.userName.text =user.name
            holder.userStatus.text =user.status
            holder.userImage.setImageResource(user.imageResId)
            return view
        }

    private class ViewHolder {
        lateinit var userImage : ImageView
        lateinit var userName : TextView
        lateinit var userStatus : TextView
    }
}
