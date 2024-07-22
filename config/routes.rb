# config/routes.rb
Rails.application.routes.draw do
  resources :todos, only: [:index, :create, :show, :update, :destroy]
  root 'homepage#index'
  # get '*path', to: 'homepage#index', via: :all
  get '/todo' => 'homepage#index'
  get '/todoss' => 'homepage#index'
  get '/addtodo' => 'homepage#index'
  get '/edittodo' => 'homepage#index'
  get '/memouse' => 'homepage#index'
  get '/refuse' => 'homepage#index'
  get '/useimperativehandle' => 'homepage#index'
  get '/uselayouteffect' => 'homepage#index'
  get '/usedebugvalue' => 'homepage#index'
end