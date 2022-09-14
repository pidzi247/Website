source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"

gem "rails",           "7.0.4"
gem "sass-rails"     
gem "sprockets-rails", "3.4.2"
gem "importmap-rails", "1.1.0"
gem "turbo-rails",     "1.1.1"
gem "stimulus-rails",  "1.0.4"
gem "jbuilder",        "2.11.5"
gem 'jquery-rails'
gem "puma",            "5.6.4"
gem "bootsnap",        "1.12.0", require: false
# Use Twitter Bootstrap library for front-end UI and layout
gem 'bootstrap-sass', '3.3.7'
# Use Font Awesome sass gem for adding icons
gem 'font-awesome-sass', '4.6.2'
# Use Hirb for better database table display in console
gem 'hirb', '0.7.3'

gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :production do
  gem 'pg', '0.18.4'
end

group :development, :test do
  gem "sqlite3", "1.4.2"
  gem "debug",   "1.5.0", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem "web-console", "4.2.0"
end

group :test do
  gem "capybara",           "3.37.1"
  gem "selenium-webdriver", "4.2.0"
  gem "webdrivers",         "5.0.0"
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem.
# Uncomment the following line if you're running Rails
# on a native Windows system:
# gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]