class Lesson < ApplicationRecord
    belongs_to :teacher
    has_many :cards
end