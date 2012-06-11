class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :name
      t.text :description
      t.integer :article_id

      t.timestamps
    end
  end
end
