Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://localhost:5173/my-thoughts"
  
      resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete]
      end
    end