class Student < ApplicationRecord
    belongs_to :teacher

    # client = Mysql2::Client.new(:host => host, :username => username, :database => database, :password => password)
    # puts 'Successfully created connection to database.'
    # resultSet = client.query('SELECT * from inventory;')
    # resultSet.each do |row|
    #     @student = row
    # end
end
  