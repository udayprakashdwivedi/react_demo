class Todo < ApplicationRecord
  has_one_attached :image
  has_many_attached :images

  validate :images_on_disk

  # def image_on_disk
  #   if self.image.attached?
  #     ActiveStorage::Blob.service.path_for(image.key)
  #     # Rails.application.routes.url_helpers.url_for(object.image)
  #     # image.url
  #   else
  #     return nil
  #   end
  # end

  def images_on_disk
    if self.image.attached?
      ActiveStorage::Blob.service.path_for(image.key)
    elsif self.images.attached?
      self.images.each do |image|
        ActiveStorage::Blob.service.path_for(image.key)
      end
    else
      return nil
    end
  end
end
