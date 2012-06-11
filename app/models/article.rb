class Article < ActiveRecord::Base
  attr_accessible :description, :name
  has_many :sections
end
