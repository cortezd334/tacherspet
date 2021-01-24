class TeachersController < ApplicationController

    def index
        teachers = Teacher.all
        render json: teachers
    end

    def show
        teacher = Teacher.find(params[:id])
        render json: teacher
    end

    def create
        teacher = Teacher.create(teacher_params)
        render json: teacher
    end

    def update
        teacher = Teacher.find(params[:id])
        teacher.update(teacher_params)
        render json: teacher
    end

    def destroy
        teacher = Teacher.find(params[:id])
        teacher.destroy
        render json: {error: "teacher has been deleted"}
    end

    private
    def teacher_params
        params.require(:teacher).permit(:name)
    end
    
end
