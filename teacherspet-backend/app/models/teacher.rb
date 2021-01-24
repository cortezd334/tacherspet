class Teacher < ApplicationRecord
    has_many :students
    has_many :lessons
    has_many :cards, through: :lessons
end