class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :images, :completed

  def image
    return if object.image.blank?

    # ActiveStorage::Blob.service.path_for(object.image.key)
    Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true)

    # Rails.application.routes.url_helpers.url_for(object.image)
  end

  def images
    if object.image.attached? && object.images.attached?
      # If both single image and multiple images are attached, return both
      single_image_url = Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true)
      multiple_images_urls = object.images.map { |image| Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true) }
      [single_image_url] + multiple_images_urls
    elsif object.image.attached?
      # If only single image is attached, return its URL
      Rails.application.routes.url_helpers.rails_blob_path(object.image, only_path: true)
    elsif object.images.attached?
      # If only multiple images are attached, return their URLs
      object.images.map { |image| Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true) }
    else
      nil
    end
  end
end
