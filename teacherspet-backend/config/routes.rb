Rails.application.routes.draw do
  resources :teachers
  resources :students
  resources :lessons
  resources :cards
end
