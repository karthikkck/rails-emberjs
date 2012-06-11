class Section < ActiveRecord::Base
  attr_accessible :article_id, :description, :name
  belongs_to :article
end
