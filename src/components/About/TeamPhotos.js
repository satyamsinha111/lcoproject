import React from "react"

export default function TeamPhotos() {
  return (
    <div className="container">
      <div class="card-group ">
        <div class="card m-2">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Eric watson</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card m-2">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Alisa Johnnes</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card m-2">
          <img
            src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">John doe</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
